import Link from 'next/link';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import { BsBatteryCharging, BsLightningCharge, BsSun, BsExclamationCircle, BsGrid3X3Gap } from 'react-icons/bs';

export default function ProductCard({
    title,
    description,
    icon,
    href = '/products',
    features = [],
    featured = false,
}) {
    const defaultIcons = {
        battery: <BsBatteryCharging className="w-10 h-10" />,
        inverter: <BsLightningCharge className="w-10 h-10" />,
        solar: <BsSun className="w-10 h-10" />,
        stabilizer: <BsExclamationCircle className="w-10 h-10" />,
        leadacid: <BsGrid3X3Gap className="w-10 h-10" />,
    };

    return (
        <div
            className={`group relative bg-white rounded-lg overflow-hidden card-hover ${featured
                ? 'border-2 border-energy-green shadow-lg'
                : 'border border-gray-200 shadow-md'
                }`}
        >
            {/* Featured Badge */}
            {featured && (
                <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-energy-orange text-white text-xs font-bold rounded-full">
                        Featured
                    </span>
                </div>
            )}

            {/* Icon Header */}
            <div
                className={`p-6 ${featured ? 'bg-energy-green' : 'bg-energy-blue'
                    } transition-colors duration-300 group-hover:bg-energy-green`}
            >
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center text-white">
                    {icon || defaultIcons.battery}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-energy-blue mb-3 group-hover:text-energy-green transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

                {/* Features List */}
                {features.length > 0 && (
                    <ul className="space-y-2 mb-6">
                        {features.slice(0, 4).map((feature, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-2 text-sm text-gray-600"
                            >
                                <HiCheckCircle className="w-4 h-4 text-energy-green flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* CTA Link */}
                <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-energy-green font-semibold text-sm group-hover:text-energy-green-dark transition-colors"
                >
                    Learn More
                    <HiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* Bottom Accent Line */}
            <div
                className={`h-1 ${featured ? 'bg-energy-orange' : 'bg-energy-green'
                    } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
            ></div>
        </div>
    );
}
