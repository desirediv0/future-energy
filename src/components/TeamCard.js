import { HiMail, HiStar } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';

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
                        <HiStar className="w-4 h-4 text-energy-orange" />
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
                        <FaLinkedinIn className="w-5 h-5" />
                    </a>
                    <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-energy-green hover:text-white transition-colors"
                        aria-label="Email"
                    >
                        <HiMail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
}
