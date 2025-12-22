/**
 * TeamCard Component
 * Display team member profile information
 * @param {string} name - Team member name
 * @param {string} role - Job title/position
 * @param {string} experience - Years of experience
 * @param {string} description - Brief bio
 * @param {string} expertise - Area of expertise
 */
export default function TeamCard({
  name,
  role,
  experience,
  description,
  expertise,
}) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg card-hover border border-gray-100">
      {/* Header Background */}
      <div className="h-32 bg-energy-gradient relative">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="teamPattern"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#teamPattern)" />
          </svg>
        </div>
        
        {/* Experience Badge */}
        {experience && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-energy-orange text-white text-xs font-bold rounded-full">
              {experience}
            </span>
          </div>
        )}
      </div>

      {/* Avatar */}
      <div className="relative -mt-16 flex justify-center">
        <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-energy-green to-energy-blue flex items-center justify-center">
          <span className="text-4xl font-bold text-white">
            {name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-4 text-center">
        <h3 className="text-xl font-bold text-energy-blue mb-1 group-hover:text-energy-green transition-colors">
          {name}
        </h3>
        <p className="text-energy-green font-semibold text-sm mb-4">{role}</p>

        {/* Expertise Badge */}
        {expertise && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
            <svg
              className="w-4 h-4 text-energy-orange"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-gray-700 text-sm font-medium">{expertise}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

        {/* Social Links */}
        <div className="flex justify-center gap-3 mt-6 pt-4 border-t border-gray-100">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-energy-green hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-energy-green hover:text-white transition-colors"
            aria-label="Email"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

