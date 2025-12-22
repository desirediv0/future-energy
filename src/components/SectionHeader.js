export default function SectionHeader({
    subtitle,
    title,
    description,
    align = 'center',
}) {
    const alignClasses = {
        left: 'text-left',
        center: 'text-center mx-auto',
        right: 'text-right ml-auto',
    };

    return (
        <div className={`max-w-3xl mb-12 md:mb-16 ${alignClasses[align]}`}>
            {/* Subtitle Badge */}
            {subtitle && (
                <div
                    className={`inline-flex items-center gap-2 px-4 py-2 bg-energy-green/10 rounded-full mb-4 ${align === 'center' ? '' : ''
                        }`}
                >
                    <span className="w-2 h-2 bg-energy-green rounded-full"></span>
                    <span className="text-energy-green font-semibold text-sm tracking-wide uppercase">
                        {subtitle}
                    </span>
                </div>
            )}

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-energy-blue mb-4">
                {title}
            </h2>

            {/* Description */}
            {description && (
                <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
            )}

            {/* Decorative Line */}
            {align === 'center' && (
                <div className="flex justify-center mt-6">
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-1 bg-energy-green rounded-full"></div>
                        <div className="w-3 h-3 bg-energy-orange rounded-full"></div>
                        <div className="w-12 h-1 bg-energy-green rounded-full"></div>
                    </div>
                </div>
            )}
        </div>
    );
}
