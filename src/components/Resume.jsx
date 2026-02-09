export default function ResumePage() {
  return (
    <main className="bg-white text-[#2b2b2b]">
      {/* ===== Header Section ===== */}
      <section
        className="relative py-24 text-center"
        style={{
          backgroundImage: "url('/textures/resume-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl font-semibold tracking-wide">My Resume</h1>
      </section>

      {/* ===== Content Section ===== */}
      <section className="max-w-7xl mx-auto px-2 py-2 space-y-24 ">
        {/* ===== Row 1 ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-semibold mb-8">Contact Info</h2>

            <div className="space-y-6 text-lg">
              <div className="flex gap-12">
                <span className="text-gray-500 w-20">Name</span>
                <span className="">Alaina Thomas</span>
              </div>

              <div className="flex gap-12">
                <span className="text-gray-500 w-20">Email</span>
                <span className="">alainamthomas@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Writing Skills */}
          <div>
            <h2 className="text-4xl font-semibold mb-8">Writing Skills</h2>

            <div className="grid grid-cols-2 gap-y-4 text-lg">
              <span>Content Writing</span>
              <span>Email Campaigns</span>

              <span>Social Media Copywriting</span>
              <span>Website Copy</span>

              <span>SEO Optimization</span>
              <span>Blog Content</span>
            </div>
          </div>
        </div>

        {/* ===== Row 2 ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Work Experience */}
          <div>
            <h2 className="text-4xl font-semibold mb-10">Work Experience</h2>

            <div className="space-y-8 text-lg">
              <div className="flex justify-between gap-6">
                <div>
                  <p className="font-semibold">Stratifi Creative Agency:</p>
                  <p className="italic text-gray-600">
                    Social Media Coordinator
                  </p>
                </div>
                <span className="text-gray-500">March 2022 – August 2022</span>
              </div>

              <div className="flex justify-between gap-6">
                <div>
                  <p className="font-semibold">Alaina Michele Media:</p>
                  <p className="italic text-gray-600">
                    Digital Media Marketing
                  </p>
                </div>
                <span className="text-gray-500">March 2020 – Present</span>
              </div>

              <div className="flex justify-between gap-6">
                <div>
                  <p className="font-semibold">SecureGive:</p>
                  <p className="italic text-gray-600">
                    Digital Content Manager
                  </p>
                </div>
                <span className="text-gray-500">
                  February 2015 – March 2020
                </span>
              </div>
            </div>
          </div>

          {/* Software & Platforms */}
          <div>
            <h2 className="text-4xl font-semibold mb-10">
              Software & Platforms
            </h2>

            <ul className="space-y-3 text-lg list-disc list-inside text-gray-700">
              <li>WordPress</li>
              <li>Photoshop</li>
              <li>Canva</li>
              <li>Slack</li>
              <li>Asana</li>
              <li>Buffer</li>
              <li>Hootsuite</li>
              <li>Microsoft Office / Office 365</li>
              <li>Google Workspace / G Suite</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
