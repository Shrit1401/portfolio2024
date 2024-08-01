import React, { useState } from "react";
import Editor from "./Editor";
import { createProject } from "@/lib/serveractions";

const AddProject = () => {
  interface FormData {
    name: string;
    description: string;
    imageUrl: string;
    url: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    imageUrl: "",
    url: "",
  });
  const [editorText, setEditorText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditorChange = (newValue: string) => {
    setEditorText(newValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await createProject(
        formData.name,
        formData.description,
        formData.imageUrl,
        editorText,
        formData.url
      );

      if (res) {
        alert("Project added successfully");
        setFormData({
          name: "",
          description: "",
          imageUrl: "",
          url: "",
        });
        setEditorText("");
      } else {
        alert("An error occurred");
      }
    } catch (error) {
      console.error("Error adding project:", error);
      alert("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="mt-4 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Add New Project
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-lg font-medium text-white mb-2">
            Project Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Project Name"
              onChange={handleChange}
              className="w-full px-3 py-2 bg-black/10 text-white rounded-lg border border-white/30 outline-none placeholder:text-gray-400"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium text-white mb-2">
            Project URL:
            <input
              type="text"
              name="url"
              value={formData.url}
              placeholder="Project URL"
              onChange={handleChange}
              className="w-full px-3 py-2 bg-black/10 text-white rounded-lg border border-white/30 outline-none placeholder:text-gray-400"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium text-white mb-2">
            Description:
            <input
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-black/10 text-white rounded-lg border border-white/30 outline-none placeholder:text-gray-400"
              placeholder="Description"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium text-white mb-2">
            Text:
            <Editor value={editorText} setValue={handleEditorChange} />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium text-white mb-2">
            Image URL:
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-black/10 text-white rounded-lg border border-white/30 outline-none placeholder:text-gray-400"
              placeholder="Enter image URL"
            />
          </label>
        </div>
        <button
          type="submit"
          className={`btn ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </main>
  );
};

export default AddProject;
