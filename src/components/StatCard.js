import { HiGlobeAlt, HiUser, HiStar, HiOfficeBuilding, HiTruck } from 'react-icons/hi';
import { BsBatteryCharging } from 'react-icons/bs';

export default function StatCard({
    value,
    label,
    icon = 'battery',
    color = 'green',
}) {
    // Icon components mapping
    const icons = {
        globe: <HiGlobeAlt className="w-8 h-8" />,
        users: <HiUser className="w-8 h-8" />,
        battery: <BsBatteryCharging className="w-8 h-8" />,
        award: <HiStar className="w-8 h-8" />,
        factory: <HiOfficeBuilding className="w-8 h-8" />,
        truck: <HiTruck className="w-8 h-8" />,
    };

    // Color classes mapping
    const colorClasses = {
        green: {
            bg: 'bg-energy-green/10',
            icon: 'text-energy-green',
            value: 'text-energy-green',
            border: 'border-energy-green/20',
        },
        blue: {
            bg: 'bg-energy-blue/10',
            icon: 'text-energy-blue',
            value: 'text-energy-blue',
            border: 'border-energy-blue/20',
        },
        orange: {
            bg: 'bg-energy-orange/10',
            icon: 'text-energy-orange',
            value: 'text-energy-orange',
            border: 'border-energy-orange/20',
        },
    };

    const colors = colorClasses[color] || colorClasses.green;

    return (
        <div
            className={`relative p-6 rounded-lg bg-white border ${colors.border} shadow-sm hover:shadow-lg transition-all duration-300 group`}
        >
            {/* Background Accent */}
            <div
                className={`absolute top-0 right-0 w-24 h-24 ${colors.bg} rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity`}
            ></div>

            {/* Icon */}
            <div
                className={`relative w-14 h-14 ${colors.bg} rounded-lg flex items-center justify-center ${colors.icon} mb-4`}
            >
                {icons[icon] || icons.battery}
            </div>

            {/* Value */}
            <div className={`text-4xl font-bold ${colors.value} mb-2`}>{value}</div>

            {/* Label */}
            <div className="text-gray-600 font-medium">{label}</div>

            {/* Decorative Line */}
            <div
                className={`absolute bottom-0 left-0 w-full h-1 ${colors.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl`}
            ></div>
        </div>
    );
}
