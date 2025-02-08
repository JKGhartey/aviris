import { JobApplication } from "@/components/widgets";

export default function JobApplicationDemo() {
  const handleSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };

  return <JobApplication onSubmit={handleSubmit} />;
}

export function JobApplicationCustomization() {
  const handleSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };

  return (
    <JobApplication
      variant="bordered"
      className="max-w-xl"
      onSubmit={handleSubmit}
    />
  );
}

export function JobApplicationLoading() {
  const handleSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };

  return <JobApplication loading={true} onSubmit={handleSubmit} />;
}
