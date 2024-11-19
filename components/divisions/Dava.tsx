export default function Dava() {
    const sections = [
      {
        letter: "D",
        title: "Dedicated",
        description: "to bridging the gap between research and real-world cancer treatment."
      },
      {
        letter: "A",
        title: "Actively",
        description: "supporting oncologists in staying at the forefront of cancer care."
      },
      {
        letter: "V",
        title: "Valued",
        description: "catalyst for collaboration among the medical, scientific, and patient communities"
      },
      {
        letter: "A",
        title: "Aiming",
        description: "to educate, empower, and support cancer care providers in making a difference."
      }
    ]
  
    return (
      <div className="grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        {sections.map((section, index) => (
          <div 
            key={index} 
            className="group relative flex flex-col items-center rounded-lg p-6 text-center transition-all duration-300 ease-in-out hover:bg-blue-300"
          >
            <div className="mb-4 text-[120px] font-bold text-gray-200 transition-colors duration-300 ease-in-out group-hover:text-blue-200">
              {section.letter}
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800 transition-colors duration-300 ease-in-out group-hover:text-white-200">
              {section.title}
            </h3>
            <p className="text-gray-600 transition-colors duration-300 ease-in-out group-hover:text-white-200">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    )
  }