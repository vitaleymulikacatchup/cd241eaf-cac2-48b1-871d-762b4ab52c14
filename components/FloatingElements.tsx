export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Social Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm floating-element" />
      <div className="absolute top-40 right-20 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm floating-element" />
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-white/10 rounded-3xl backdrop-blur-sm floating-element" />
      <div className="absolute bottom-20 right-40 w-14 h-14 bg-white/10 rounded-2xl backdrop-blur-sm floating-element" />
      
      {/* Additional decorative elements */}
      <div className="absolute top-60 left-1/4 w-8 h-8 bg-accent-yellow/30 rounded-full floating-element" />
      <div className="absolute top-80 right-1/3 w-10 h-10 bg-accent-blue/30 rounded-full floating-element" />
      <div className="absolute bottom-60 left-1/3 w-6 h-6 bg-accent-pink/30 rounded-full floating-element" />
    </div>
  )
}