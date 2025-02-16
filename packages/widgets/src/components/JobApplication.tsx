"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/apps/landing/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FiUpload, FiCheck, FiX } from "react-icons/fi";
import { toast } from "sonner";
import { Toaster } from "sonner";

const jobApplicationVariants = cva("w-full max-w-3xl mx-auto rounded-xl", {
  variants: {
    variant: {
      default: "bg-card shadow-lg border p-4 sm:p-6 md:p-8 lg:p-10",
      bordered: "border-2 p-4 sm:p-6 md:p-8 lg:p-10",
      ghost: "bg-transparent px-0",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const formSectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export interface JobApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  documents: {
    name: string;
    file: File;
    type: "resume" | "portfolio" | "other";
  }[];
  coverLetter: string;
  portfolio?: string;
  linkedin?: string;
  currentRole?: string;
  availability?: string;
  salaryExpectation?: string;
  skills: string[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  workAuthorization:
    | "citizen"
    | "permanent_resident"
    | "visa"
    | "need_sponsorship";
  preferredLocation: "remote" | "hybrid" | "onsite";
  referralSource?: string;
  isDraft?: boolean;
}

export interface JobApplicationProps
  extends Omit<React.HTMLAttributes<HTMLFormElement>, "onSubmit">,
    VariantProps<typeof jobApplicationVariants> {
  onSubmit?: (data: JobApplicationData) => Promise<void>;
  onSaveDraft?: (data: JobApplicationData) => Promise<void>;
  loading?: boolean;
  jobTitle?: string;
  companyName?: string;
  showDocuments?: boolean;
  showSocial?: boolean;
  showAdditionalFields?: boolean;
  maxFiles?: number;
  allowedFileTypes?: string[];
  maxFileSize?: number;
}

export function JobApplication({
  className,
  variant,
  onSubmit,
  onSaveDraft,
  loading = false,
  jobTitle = "Job Application",
  companyName,
  showDocuments = true,
  showSocial = true,
  showAdditionalFields = true,
  maxFiles = 5,
  allowedFileTypes = [".pdf", ".doc", ".docx"],
  maxFileSize = 5 * 1024 * 1024, // 5MB
  ...props
}: JobApplicationProps) {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState<JobApplicationData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    documents: [],
    coverLetter: "",
    portfolio: "",
    linkedin: "",
    currentRole: "",
    availability: "",
    salaryExpectation: "",
    skills: [],
    education: [],
    workAuthorization: "citizen",
    preferredLocation: "onsite",
    referralSource: "",
    isDraft: false,
  });

  const [errors, setErrors] = React.useState<
    Partial<Record<keyof JobApplicationData, string>>
  >({});
  const [uploadProgress, setUploadProgress] = React.useState<number>(0);
  const [skillInput, setSkillInput] = React.useState("");

  // Autosave functionality
  React.useEffect(() => {
    const autosaveInterval = setInterval(() => {
      if (onSaveDraft && !formData.isDraft) {
        onSaveDraft({ ...formData, isDraft: true });
      }
    }, 60000); // Autosave every minute

    return () => clearInterval(autosaveInterval);
  }, [formData, onSaveDraft]);

  const validateForm = () => {
    const newErrors: Partial<Record<keyof JobApplicationData, string>> = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Required fields validation
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.experience) newErrors.experience = "Experience is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors before submitting");
      return;
    }

    try {
      if (onSubmit) {
        toast.promise(onSubmit(formData), {
          loading: "Submitting application...",
          success: () => {
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              experience: "",
              documents: [],
              coverLetter: "",
              portfolio: "",
              linkedin: "",
              currentRole: "",
              availability: "",
              salaryExpectation: "",
              skills: [],
              education: [],
              workAuthorization: "citizen",
              preferredLocation: "onsite",
              referralSource: "",
              isDraft: false,
            });
            setStep(1);
            return "Application submitted successfully!";
          },
          error: "Failed to submit application. Please try again.",
        });
      }
    } catch (error) {
      toast.error("Failed to submit application. Please try again.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    // Validate file count
    if (formData.documents.length + files.length > maxFiles) {
      toast.error(`Maximum ${maxFiles} files allowed`);
      return;
    }

    // Validate each file
    const validFiles = files.filter((file) => {
      // Check file size
      if (file.size > maxFileSize) {
        toast.error(
          `${file.name} exceeds maximum file size of ${
            maxFileSize / 1024 / 1024
          }MB`
        );
        return false;
      }

      // Check file type
      const fileExtension = `.${file.name.split(".").pop()?.toLowerCase()}`;
      if (!allowedFileTypes.includes(fileExtension)) {
        toast.error(`${file.name} has an unsupported file type`);
        return false;
      }

      return true;
    });

    // Simulate upload progress
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(progressInterval);
        setUploadProgress(0);

        // Add valid files to documents with proper type assertion
        setFormData((prev) => ({
          ...prev,
          documents: [
            ...prev.documents,
            ...validFiles.map(
              (file) =>
                ({
                  name: file.name,
                  file,
                  type: file.name.toLowerCase().includes("resume")
                    ? "resume"
                    : "other",
                } as const)
            ),
          ],
        }));

        toast.success(`${validFiles.length} file(s) uploaded successfully`);
      }
    }, 100);
  };

  const handleSkillAdd = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()],
      }));
      setSkillInput("");
    }
  };

  const handleEducationAdd = () => {
    setFormData((prev) => ({
      ...prev,
      education: [...prev.education, { degree: "", institution: "", year: "" }],
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
      <Toaster position="bottom-right" expand={true} richColors />
      <form
        className={cn(jobApplicationVariants({ variant }), className)}
        onSubmit={handleSubmit}
        {...props}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            {jobTitle}
          </h2>
          {companyName && (
            <p className="text-base sm:text-lg text-muted-foreground">
              {companyName}
            </p>
          )}
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-10 px-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className={cn("flex items-center", s < 3 && "flex-1")}>
              <div
                className={cn(
                  "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 transition-colors shrink-0",
                  step >= s
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-muted-foreground text-muted-foreground"
                )}
              >
                {step > s ? <FiCheck className="w-4 h-4 sm:w-5 sm:h-5" /> : s}
              </div>
              {s < 3 && (
                <div
                  className={cn(
                    "flex-1 h-0.5 mx-2 sm:mx-4 transition-colors",
                    step > s ? "bg-primary" : "bg-muted"
                  )}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Personal Information */}
        <motion.div
          initial="hidden"
          animate={step === 1 ? "visible" : "hidden"}
          variants={formSectionVariants}
          className={cn("space-y-6", step !== 1 && "hidden")}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2.5">
              <Label htmlFor="firstName" className="text-base">
                First Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className={cn(
                  "h-11 transition-all focus:scale-[1.02]",
                  errors.firstName && "border-destructive"
                )}
              />
              {errors.firstName && (
                <p className="text-sm text-destructive">{errors.firstName}</p>
              )}
            </div>
            <div className="space-y-2.5">
              <Label htmlFor="lastName" className="text-base">
                Last Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className={cn(
                  "h-11 transition-all focus:scale-[1.02]",
                  errors.lastName && "border-destructive"
                )}
              />
              {errors.lastName && (
                <p className="text-sm text-destructive">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="space-y-2.5">
            <Label htmlFor="email" className="text-base">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={cn(
                "h-11 transition-all focus:scale-[1.02]",
                errors.email && "border-destructive"
              )}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2.5">
            <Label htmlFor="phone" className="text-base">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className={cn(
                "h-11 transition-all focus:scale-[1.02]",
                errors.phone && "border-destructive"
              )}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone}</p>
            )}
          </div>

          {showSocial && (
            <div className="space-y-6 pt-2">
              <div className="space-y-2.5">
                <Label htmlFor="linkedin" className="text-base">
                  LinkedIn Profile
                </Label>
                <Input
                  id="linkedin"
                  name="linkedin"
                  type="url"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/..."
                  className="h-11 transition-all focus:scale-[1.02]"
                />
              </div>
              <div className="space-y-2.5">
                <Label htmlFor="portfolio" className="text-base">
                  Portfolio Website
                </Label>
                <Input
                  id="portfolio"
                  name="portfolio"
                  type="url"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  placeholder="https://..."
                  className="h-11 transition-all focus:scale-[1.02]"
                />
              </div>
            </div>
          )}
        </motion.div>

        {/* Step 2: Professional Information */}
        <motion.div
          initial="hidden"
          animate={step === 2 ? "visible" : "hidden"}
          variants={formSectionVariants}
          className={cn("space-y-6", step !== 2 && "hidden")}
        >
          {/* Skills Section */}
          <div className="space-y-2.5">
            <Label htmlFor="skills" className="text-base">
              Skills
            </Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-sm"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        skills: prev.skills.filter((_, i) => i !== index),
                      }));
                    }}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <FiX className="h-4 w-4" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                id="skills"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                placeholder="Add a skill (e.g., JavaScript, Project Management)"
                className="h-11"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSkillAdd();
                  }
                }}
              />
              <Button
                type="button"
                variant="outline"
                onClick={handleSkillAdd}
                className="h-11 px-6"
              >
                Add
              </Button>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-2.5">
            <Label className="text-base">Education</Label>
            <div className="space-y-4">
              {formData.education.map((edu, index) => (
                <div
                  key={index}
                  className="space-y-4 p-4 rounded-lg bg-muted/50"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium">Education #{index + 1}</h4>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          education: prev.education.filter(
                            (_, i) => i !== index
                          ),
                        }));
                      }}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <FiX className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor={`degree-${index}`}>Degree</Label>
                      <Input
                        id={`degree-${index}`}
                        value={edu.degree}
                        onChange={(e) => {
                          const newEducation = [...formData.education];
                          newEducation[index].degree = e.target.value;
                          setFormData((prev) => ({
                            ...prev,
                            education: newEducation,
                          }));
                        }}
                        placeholder="e.g., Bachelor of Science"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`institution-${index}`}>
                        Institution
                      </Label>
                      <Input
                        id={`institution-${index}`}
                        value={edu.institution}
                        onChange={(e) => {
                          const newEducation = [...formData.education];
                          newEducation[index].institution = e.target.value;
                          setFormData((prev) => ({
                            ...prev,
                            education: newEducation,
                          }));
                        }}
                        placeholder="e.g., University of Example"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`year-${index}`}>Year</Label>
                      <Input
                        id={`year-${index}`}
                        value={edu.year}
                        onChange={(e) => {
                          const newEducation = [...formData.education];
                          newEducation[index].year = e.target.value;
                          setFormData((prev) => ({
                            ...prev,
                            education: newEducation,
                          }));
                        }}
                        placeholder="e.g., 2023"
                        className="h-11"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={handleEducationAdd}
                className="w-full h-11"
              >
                Add Education
              </Button>
            </div>
          </div>

          {/* Work Authorization */}
          <div className="space-y-2.5">
            <Label htmlFor="workAuthorization" className="text-base">
              Work Authorization
            </Label>
            <select
              id="workAuthorization"
              name="workAuthorization"
              value={formData.workAuthorization}
              onChange={handleInputChange}
              className="w-full h-11 rounded-md border bg-background px-3 py-2"
            >
              <option value="citizen">Citizen</option>
              <option value="permanent_resident">Permanent Resident</option>
              <option value="visa">Visa Holder</option>
              <option value="need_sponsorship">Need Sponsorship</option>
            </select>
          </div>

          {/* Preferred Location */}
          <div className="space-y-2.5">
            <Label htmlFor="preferredLocation" className="text-base">
              Preferred Work Location
            </Label>
            <select
              id="preferredLocation"
              name="preferredLocation"
              value={formData.preferredLocation}
              onChange={handleInputChange}
              className="w-full h-11 rounded-md border bg-background px-3 py-2"
            >
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
              <option value="onsite">On-site</option>
            </select>
          </div>

          {/* Referral Source */}
          <div className="space-y-2.5">
            <Label htmlFor="referralSource" className="text-base">
              How did you hear about us?
            </Label>
            <Input
              id="referralSource"
              name="referralSource"
              value={formData.referralSource}
              onChange={handleInputChange}
              placeholder="e.g., LinkedIn, Company Website, Referral"
              className="h-11"
            />
          </div>
        </motion.div>

        {/* Step 3: Documents */}
        <motion.div
          initial="hidden"
          animate={step === 3 ? "visible" : "hidden"}
          variants={formSectionVariants}
          className={cn("space-y-6", step !== 3 && "hidden")}
        >
          {/* File Upload Section */}
          {showDocuments && (
            <div className="space-y-2.5">
              <Label className="text-base">Documents</Label>
              <div className="space-y-4">
                {/* Existing Documents */}
                {formData.documents.length > 0 && (
                  <div className="space-y-2">
                    {formData.documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                      >
                        <div className="flex items-center gap-3">
                          <FiCheck className="h-5 w-5 text-green-500" />
                          <span className="text-sm">{doc.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              documents: prev.documents.filter(
                                (_, i) => i !== index
                              ),
                            }));
                          }}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <FiX className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Upload Progress */}
                {uploadProgress > 0 && (
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                )}

                {/* Upload Button */}
                <div className="relative">
                  <Input
                    id="documents"
                    name="documents"
                    type="file"
                    onChange={handleFileChange}
                    multiple
                    accept={allowedFileTypes.join(",")}
                    className="hidden"
                  />
                  <label
                    htmlFor="documents"
                    className="flex flex-col items-center justify-center w-full h-32 rounded-lg border-2 border-dashed cursor-pointer hover:bg-muted/50 transition-colors"
                  >
                    <FiUpload className="h-10 w-10 mb-3 text-muted-foreground" />
                    <div className="text-center px-4">
                      <span className="text-sm sm:text-base text-muted-foreground">
                        Upload documents (PDF, DOC, DOCX)
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">
                        Max {maxFiles} files, {maxFileSize / 1024 / 1024}MB each
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Cover Letter */}
          <div className="space-y-2.5">
            <Label htmlFor="coverLetter" className="text-base">
              Cover Letter
            </Label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              placeholder="Tell us why you're interested in this position..."
              className="min-h-[200px] resize-y"
            />
            <div className="flex justify-end">
              <span className="text-sm text-muted-foreground">
                {formData.coverLetter.length} characters
              </span>
            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-10">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={step === 1}
            className="min-w-[100px] h-11"
          >
            Previous
          </Button>

          <div className="flex gap-3">
            {onSaveDraft && (
              <Button
                type="button"
                variant="outline"
                onClick={() => onSaveDraft({ ...formData, isDraft: true })}
                className="min-w-[100px] h-11"
              >
                Save Draft
              </Button>
            )}

            {step < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="min-w-[100px] h-11"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={loading}
                className="min-w-[140px] h-11"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <FiUpload className="h-4 w-4" />
                    </motion.div>
                    Submitting...
                  </span>
                ) : (
                  "Submit Application"
                )}
              </Button>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
