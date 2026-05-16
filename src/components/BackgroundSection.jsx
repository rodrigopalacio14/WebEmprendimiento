export function BackgroundSection({
  children,
  backgroundImage,
  backgroundVideo,
  overlay = 'rgba(0,0,0,0.45)',
  height,
  fixed = true,
  align = 'center',
  className = '',
  ...props
}) {
  const style = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    minHeight: height,
    '--background-align': align,
    '--section-overlay': overlay
  }

  return (
    <section
      className={`background-section ${fixed ? 'bg-fixed-section' : ''} ${className}`}
      style={style}
      {...props}
    >
      {backgroundVideo ? (
        <video
          className="background-video"
          src={backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : null}
      <div className="background-overlay" />
      <div className="background-content">{children}</div>
    </section>
  )
}
