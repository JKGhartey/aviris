"use client";

import { JobApplication } from "@/components/widgets/JobApplication";
import { InstallationSection } from "@/components/custom/InstallationSection";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export default function JobApplicationPage() {
  return (
    <div>
      {/* Header */}
      <div className="space-y-6 sm:space-y-0 sm:flex sm:items-center sm:justify-between mb-16">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Job Application
          </h1>
          <p className="text-lg text-muted-foreground">
            A customizable job application form widget for collecting candidate
            information.
          </p>
        </div>
        <Button
          variant="outline"
          size="lg"
          className="h-11 w-full sm:w-auto"
          asChild
        >
          <a
            href="https://github.com/yourusername/aviris"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6"
          >
            <FaGithub className="h-5 w-5" />
            <span>GitHub</span>
          </a>
        </Button>
      </div>

      {/* Component Demo */}
      <div className="mb-24">
        <JobApplication
          jobTitle="Marketing Manager"
          companyName="Acme Inc."
          onSubmit={async (data) => {
            console.log("Form submitted:", data);
          }}
        />
      </div>

      {/* Installation */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Installation
        </h2>
        <InstallationSection component="job-application" />
      </div>
    </div>
  );
}
