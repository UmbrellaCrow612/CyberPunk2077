interface SectionProps {
  children: React.ReactNode
  tailwindClasses?: string
}

export const Section: React.FC<SectionProps> = ({
  children,
  tailwindClasses,
}) => {
  return (
    <section
      className={`${tailwindClasses} max-w-screen-2xl mx-auto`}
    >
      {children}
    </section>
  )
}
