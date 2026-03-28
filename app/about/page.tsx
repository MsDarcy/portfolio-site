import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <h1 className="page-title">About</h1>
      <p className="page-lead">
        Product designer focused on enterprise workflows, API platforms, and
        operational tooling.
      </p>
      <div className="page-body">
        <p>
          This site collects selected case studies. Replace this copy with your
          background, principles, and how you like to collaborate.
        </p>
      </div>
    </>
  );
}
