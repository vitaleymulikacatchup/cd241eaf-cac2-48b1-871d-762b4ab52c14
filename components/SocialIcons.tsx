export default function SocialIcons() {
  const socialIcons = [
    { name: 'YouTube', color: 'bg-red-500', icon: '▶️' },
    { name: 'Twitter', color: 'bg-blue-400', icon: '🐦' },
    { name: 'Instagram', color: 'bg-pink-500', icon: '📷' },
    { name: 'Facebook', color: 'bg-blue-600', icon: '👥' },
    { name: 'Heart', color: 'bg-red-400', icon: '❤️' },
    { name: 'Message', color: 'bg-green-400', icon: '💬' },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none">
      {socialIcons.map((social, index) => (
        <div
          key={social.name}
          className={`absolute w-12 h-12 ${social.color} rounded-xl flex items-center justify-center text-white text-xl floating-element social-icon`}
          style={{
            top: `${20 + (index * 15)}%`,
            right: `${10 + (index % 3) * 20}%`,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          {social.icon}
        </div>
      ))}
    </div>
  )
}