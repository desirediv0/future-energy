/**
 * StatCard Component
 * Display statistics with icon and animation
 * @param {string} value - The statistic value (e.g., "30+")
 * @param {string} label - Description of the statistic
 * @param {string} icon - Icon type: 'globe', 'users', 'battery', 'award', 'factory', 'truck'
 * @param {string} color - Color theme: 'green', 'blue', 'orange'
 */
export default function StatCard({
  value,
  label,
  icon = 'battery',
  color = 'green',
}) {
  // Icon components mapping
  const icons = {
    globe: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    users: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
    battery: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 4h-3V2h-4v2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2zm-5 16l-5-5h3v-4h4v4h3l-5 5z" />
      </svg>
    ),
    award: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    factory: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 22H2V10l7-3v2l5-2v3l3-1v2l5-2v13zM12 9.95l-5 2V10l-3 1.32V20h16v-9l-3 1v-2.05l-5 2z" />
      </svg>
    ),
    truck: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
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
      className={`relative p-6 rounded-2xl bg-white border ${colors.border} shadow-sm hover:shadow-lg transition-all duration-300 group`}
    >
      {/* Background Accent */}
      <div
        className={`absolute top-0 right-0 w-24 h-24 ${colors.bg} rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity`}
      ></div>

      {/* Icon */}
      <div
        className={`relative w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center ${colors.icon} mb-4`}
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

