var flashcards = {
  Example: [
    { section: "Example Section", question: "What is 1+1?", answer: "2" },
  ],
  "Logarithm Rules": [
    {
      section: "Fundamental Rules",
      question: "Product Rule?",
      answer:
        "log<sub>a</sub>(xy) = log<sub>a</sub>(x) + log<sub>a</sub>(y)<br><br>Example: log<sub>2</sub>(8 * 4) = log<sub>2</sub>(8) + log<sub>2</sub>(4) = 3 + 2 = 5",
    },
    {
      section: "Fundamental Rules",
      question: "Quotient Rule?",
      answer:
        "log<sub>a</sub>(x/y) = log<sub>a</sub>(x) - log<sub>a</sub>(y)<br><br>Example: log<sub>3</sub>(27/9) = log<sub>3</sub>(27) - log<sub>3</sub>(9) = 3 - 2 = 1",
    },
    {
      section: "Fundamental Rules",
      question: "Power Rule?",
      answer:
        "log<sub>a</sub>(x<sup>n</sup>) = n * log<sub>a</sub>(x)<br><br>Example: log<sub>2</sub>(8<sup>3</sup>) = 3 * log<sub>2</sub>(8) = 3 * 3 = 9",
    },
    {
      section: "Basic Properties",
      question: "Zero Rule?",
      answer:
        "log<sub>a</sub>(1) = 0, where a > 0 and a ≠ 1<br><br>Example: log<sub>5</sub>(1) = 0",
    },
    {
      section: "Basic Properties",
      question: "Identity Rule?",
      answer:
        "log<sub>a</sub>(a) = 1, for a > 0<br><br>Example: log<sub>7</sub>(7) = 1",
    },
    {
      section: "Inverse Properties",
      question: "Inverse Logarithm?",
      answer:
        "a<sup>(log<sub>a</sub>(x))</sup> = x, for x > 0 and a > 0, a ≠ 1<br><br>Example: 2<sup>(log<sub>2</sub>(8))</sup> = 8",
    },
    {
      section: "Inverse Properties",
      question: "Inverse Exponent?",
      answer:
        "log<sub>a</sub>(a<sup>x</sup>) = x, for a > 0, a ≠ 1<br><br>Example: log<sub>3</sub>(3<sup>4</sup>) = 4",
    },
    {
      section: "Advanced Rules",
      question: "Change of Base?",
      answer:
        "log<sub>a</sub>(x) = log<sub>b</sub>(x) / log<sub>b</sub>(a), where a, b > 0 and a, b ≠ 1<br><br>Example: log<sub>2</sub>(8) = log<sub>10</sub>(8) / log<sub>10</sub>(2) ≈ 3",
    },
    {
      section: "Definitions",
      question: "Logarithm definition?",
      answer:
        "If b<sup>x</sup> = y, then log<sub>b</sub>(y) = x<br><br>Example: If 2<sup>3</sup> = 8, then log<sub>2</sub>(8) = 3",
    },
    {
      section: "Special Logarithms",
      question: "Natural logarithm?",
      answer:
        "ln(x) is the logarithm with base e (≈ 2.71828)<br><br>Example: ln(e<sup>2</sup>) = 2",
    },
    {
      section: "Special Logarithms",
      question: "Common logarithm?",
      answer:
        "log(x) without a base is the logarithm with base 10<br><br>Example: log(100) = 2",
    },
    {
      section: "Properties",
      question: "Logarithm domain?",
      answer:
        "Domain of log<sub>b</sub>(x) is x > 0, where b > 0 and b ≠ 1<br><br>Example: log<sub>2</sub>(-4) is undefined",
    },
    {
      section: "Applications",
      question: "Solve log<sub>2</sub>(x) = 3?",
      answer:
        "x = 2<sup>3</sup> = 8<br><br>Example: If log<sub>2</sub>(x) = 3, then x = 2<sup>3</sup> = 8",
    },
    {
      section: "Relationships",
      question: "Logs and exponents?",
      answer:
        "Logarithms and exponents are inverse operations<br><br>Example: If 2<sup>3</sup> = 8, then log<sub>2</sub>(8) = 3",
    },
    {
      section: "Advanced Manipulations",
      question:
        "Simplify log<sub>a</sub>(x<sup>m</sup>) * log<sub>a</sub>(y<sup>n</sup>)?",
      answer:
        "log<sub>a</sub>(x<sup>m</sup>) * log<sub>a</sub>(y<sup>n</sup>) = log<sub>a</sub>(x<sup>m</sup> * y<sup>n</sup>)<br><br>Example: log<sub>2</sub>(4<sup>3</sup>) * log<sub>2</sub>(8<sup>2</sup>) = log<sub>2</sub>(4<sup>3</sup> * 8<sup>2</sup>)",
    },
    {
      section: "Simplifications",
      question: "Simplify ln(e<sup>x</sup>)?",
      answer: "ln(e<sup>x</sup>) = x<br><br>Example: ln(e<sup>5</sup>) = 5",
    },
    {
      section: "Negation",
      question: "Result of log<sub>a</sub>(1/x)?",
      answer:
        "log<sub>a</sub>(1/x) = -log<sub>a</sub>(x)<br><br>Example: log<sub>2</sub>(1/8) = -log<sub>2</sub>(8) = -3",
    },
    {
      section: "Bases",
      question: "Convert log bases?",
      answer:
        "log<sub>a</sub>(x) = log<sub>b</sub>(x) / log<sub>b</sub>(a)<br><br>Example: log<sub>3</sub>(9) = log<sub>2</sub>(9) / log<sub>2</sub>(3) ≈ 2",
    },
    {
      section: "Equations",
      question: "Solve 2<sup>(x+1)</sup> = 8?",
      answer:
        "Take log<sub>2</sub> of both sides, simplify to x + 1 = 3, so x = 2<br><br>Example: 2<sup>(x+1)</sup> = 8 → log<sub>2</sub>(2<sup>(x+1)</sup>) = log<sub>2</sub>(8) → x + 1 = 3 → x = 2",
    },
  ],
  Space: [
    {
      section: "Observational Astronomy",
      question: "What does redshift in light from most galaxies indicate?",
      answer: "It indicates that most galaxies are moving away from us.",
    },
    {
      section: "Observational Astronomy",
      question: "How is redshift determined in star spectra?",
      answer:
        "By comparing absorption lines in star spectra with a control; lines shift towards the red end.",
    },
    {
      section: "Observational Astronomy",
      question:
        "What is the main cause of redshift in the light from distant galaxies?",
      answer:
        "The expansion of the universe stretches the light waves, causing redshift.",
    },
    {
      section: "Observational Astronomy",
      question:
        "What would a blueshifted galaxy indicate, and why would this contradict the Big Bang theory?",
      answer:
        "A blueshifted galaxy would indicate it is moving toward us, contradicting the Big Bang theory, which predicts that galaxies are moving away from us.",
    },
    {
      section: "Observational Astronomy",
      question:
        "What does the even distribution of cosmic background radiation suggest?",
      answer: "It supports the idea of a single origin, such as the Big Bang.",
    },
    {
      section: "Observational Astronomy",
      question:
        "Why is cosmic background radiation considered evidence for the Big Bang?",
      answer:
        "It is the remnant heat from the Big Bang, providing evidence of the universe's hot, dense origin.",
    },
    {
      section: "Cosmological Principles",
      question:
        "What does the similar ratio of helium to hydrogen in stars and at the time of the Big Bang tell us?",
      answer:
        "It supports our understanding of element formation during the early universe.",
    },
    {
      section: "Cosmological Principles",
      question: "Why is the helium-hydrogen ratio important in cosmology?",
      answer:
        "It provides evidence for the processes of nuclear fusion in the early universe, which produced these elements.",
    },
    {
      section: "Cosmological Principles",
      question: "Why are heavier elements rarer in the universe?",
      answer:
        "Heavier elements are rarer because their formation requires tremendous energy through fusion.",
    },
    {
      section: "Cosmological Principles",
      question:
        "What is the main process that forms elements heavier than iron (Fe)?",
      answer:
        "Elements heavier than iron form in supernova explosions, where extreme energy is available.",
    },
    {
      section: "Cosmological Principles",
      question:
        "What element marks the end of fusion in a star before a supernova?",
      answer:
        "Iron (Fe) marks the end of fusion in a star before it undergoes a supernova.",
    },
    {
      section: "Stellar Evolution",
      question:
        "How does the balloon model demonstrate the expansion of the universe?",
      answer:
        "As the balloon expands, points further apart move away from each other faster, simulating the expansion of the universe.",
    },
    {
      section: "Stellar Evolution",
      question:
        "What key concept does the balloon model illustrate about the universe's expansion?",
      answer:
        "It illustrates that distant objects move away faster, similar to galaxies in the expanding universe.",
    },
    {
      section: "Stellar Evolution",
      question:
        "What are the characteristics of high-mass stars compared to low-mass stars?",
      answer:
        "High-mass stars are brighter, have shorter lifespans, faster fusion rates, and larger surface areas.",
    },
    {
      section: "Stellar Evolution",
      question:
        "Where are high-mass stars located on the Hertzsprung-Russell diagram?",
      answer:
        "High-mass stars are located in the upper left region of the Hertzsprung-Russell diagram.",
    },
    {
      section: "Stellar Evolution",
      question: "What happens when a star runs out of fuel for fusion?",
      answer:
        "Gravity causes the star to collapse, potentially leading to more fusion of heavier elements or a supernova event if iron has already been fused.",
    },
    {
      section: "Stellar Evolution",
      question:
        "What two forces are in equilibrium during a star's stable phase?",
      answer:
        "Stellar fusion and gravitational forces are in equilibrium during a star's stable phase.",
    },
    {
      section: "Gravitational Forces",
      question: "What is the gravitational force equation?",
      answer:
        "F = G * (m1 * m2) / r^2, where larger orbits have greater orbital periods.",
    },
    {
      section: "Gravitational Forces",
      question:
        "What factors affect the gravitational force between two objects?",
      answer:
        "The masses of the objects and the distance between them affect the gravitational force.",
    },
    {
      section: "Gravitational Forces",
      question: "What is escape velocity and how does mass affect it?",
      answer:
        "Escape velocity is the speed needed to escape a gravitational pull; the greater the mass, the greater the force required.",
    },
    {
      section: "Gravitational Forces",
      question: "Why does Earth have a higher escape velocity than the Moon?",
      answer:
        "Earth has a higher escape velocity because it has greater mass and stronger gravity than the Moon.",
    },
  ],
  "Plate tectonics": [
    {
      section: "Plate Tectonics",
      question: "What occurs when two continental crust plates converge?",
      answer: "The plates collide and form large mountain ranges.",
    },
    {
      section: "Plate Tectonics",
      question: "What occurs when two oceanic crust plates converge?",
      answer:
        "One of the plates is subducted, forming a deep-sea trench and volcanic islands.",
    },
    {
      section: "Plate Tectonics",
      question: "What happens to the density of new seafloor as it cools?",
      answer: "The density of the new seafloor increases as it cools.",
    },
    {
      section: "Plate Tectonics",
      question: "What occurs at an oceanic-oceanic convergent boundary?",
      answer:
        "One oceanic plate is subducted beneath the other, leading to the formation of a trench and a volcanic island arc.",
    },
    {
      section: "Plate Tectonics",
      question:
        "Each cycle of spreading and intrusion of magma during seafloor spreading results in _________.",
      answer: "The formation of new oceanic crust.",
    },
    {
      section: "Plate Tectonics",
      question:
        "Features found at divergent boundaries include ______________.",
      answer: "Mid-ocean ridges, rift valleys, and new oceanic crust.",
    },
    {
      section: "Plate Tectonics",
      question:
        "Continental-continental plate collisions produce_______________________",
      answer: "Large mountain ranges, such as the Himalayas.",
    },
    {
      section: "Plate Tectonics",
      question:
        "Crust is neither created nor destroyed at what type of boundary?",
      answer: "Transform boundaries.",
    },
    {
      section: "Plate Tectonics",
      question:
        "A narrow, elongated depression in the seafloor is called a ________________.",
      answer: "Trench.",
    },
    {
      section: "Plate Tectonics",
      question:
        "This type of boundary is characterized by long faults and shallow earthquakes.",
      answer: "Transform plate boundary.",
    },
    {
      section: "Plate Tectonics",
      question:
        "What theory states that the Earth’s crust and rigid upper mantle are broken into enormous slabs called plates that move slowly over the Earth’s surface?",
      answer: "The theory of plate tectonics.",
    },
    {
      section: "Plate Tectonics",
      question: "Places where plates move apart are called ________________.",
      answer: "Divergent boundaries.",
    },
    {
      section: "Plate Tectonics",
      question:
        "When one plate descends beneath another it is called ________________.",
      answer: "Subduction.",
    },
    {
      section: "Plate Tectonics",
      question: "Plates come together at __________________.",
      answer: "Convergent boundaries.",
    },
    {
      section: "Plate Tectonics",
      question:
        "Draw a diagram of an oceanic-oceanic plate convergence. What physical land feature forms here?",
      answer: "A volcanic island arc and a deep-sea trench form.",
    },
    {
      section: "Plate Tectonics",
      question:
        "What is the theory of plate tectonics? Include the name of each layer, the general speed, direction, and fit of the plates.",
      answer:
        "The theory of plate tectonics explains that the Earth's lithosphere is divided into plates that move over the asthenosphere. Plates move at different speeds and directions, fitting together like a jigsaw puzzle.",
    },
    {
      section: "Plate Tectonics",
      question:
        "Draw a diagram of an oceanic-continental convergent boundary. What physical land feature forms here?",
      answer:
        "A trench and a volcanic mountain range form along the continental margin.",
    },
    {
      section: "Plate Tectonics",
      question:
        "Draw a diagram of continental-continental convergent boundary. What physical land feature forms here?",
      answer: "A large mountain range forms, such as the Himalayas.",
    },
    {
      section: "Plate Tectonics",
      question:
        "Draw a diagram of a divergent boundary. What physical feature forms here?",
      answer: "A mid-ocean ridge or rift valley forms.",
    },
    {
      section: "Plate Tectonics",
      question:
        "Draw a diagram of a transform plate boundary. What often occurs at this type of boundary?",
      answer: "Earthquakes often occur along transform boundaries.",
    },
  ],
  Math: [
    {
      section: "Algebra Basics",
      question:
        "What is the coefficient of a variable without a visible coefficient?",
      answer: "The coefficient is 1.",
    },
    {
      section: "Properties of Operations",
      question:
        "What does the commutative property state for addition and multiplication?",
      answer:
        "It states that the order of addition or multiplication does not affect the result, e.g., 7 + 5 = 5 + 7 and 7 × 5 = 5 × 7.",
    },
    {
      section: "Properties of Operations",
      question:
        "Why does the commutative property not apply to subtraction and division?",
      answer:
        "Because changing the order in subtraction or division results in different outcomes.",
    },
    {
      section: "Properties of Operations",
      question: "What does the associative property describe?",
      answer:
        "It describes how grouping in addition or multiplication does not affect the result, e.g., (2 + 5) + 8 = 2 + (5 + 8).",
    },
    {
      section: "Order of Operations",
      question: "Why does typing -9^2 into a calculator give -81?",
      answer:
        "Because the calculator squares the 9 first and then multiplies by -1 due to order of operations. To square a negative number, use parentheses.",
    },
    {
      section: "Absolute Value",
      question: "Why is an absolute value always positive?",
      answer:
        "Because it represents distance from an origin, and distances cannot be negative.",
    },
    {
      section: "Imaginary Numbers",
      question:
        "Why is the square root of a negative number impossible without imaginary numbers?",
      answer:
        "Because no product of two positive or two negative numbers can produce a negative number.",
    },
    {
      section: "Exponents",
      question: "What is any number raised to the power of zero equal to?",
      answer:
        "It is always equal to 1 because it represents the base dividing by itself.",
    },
    {
      section: "Mathematical Terminology",
      question:
        "What is the term for expressions or functions that are the same?",
      answer: "They are called equivalent.",
    },
    {
      section: "Imaginary Numbers",
      question: "What does the letter 'i' represent in imaginary numbers?",
      answer: "'i' represents the square root of -1.",
    },
    {
      section: "Rationalizing Denominators",
      question: "What does rationalizing a denominator achieve?",
      answer:
        "It alters the composition so that there is an integer in the denominator without changing equivalency.",
    },
    {
      section: "Rationalizing Denominators",
      question: "How are conjugates used in rationalizing denominators?",
      answer:
        "A conjugate is applied to both numerator and denominator so that their product produces an integer in the denominator.",
    },
    {
      section: "Functions and Zeros",
      question: "What do solutions for x in a function represent?",
      answer:
        "They represent the zeros of the function, which are x-intercepts if they are real numbers.",
    },
    {
      section: "Coordinate Geometry",
      question:
        "What mathematical concept is represented by the distance formula?",
      answer:
        "It represents a Cartesian plane version of the Pythagorean theorem.",
    },
    {
      section: "Quadratic Functions",
      question: "How is the quadratic formula derived?",
      answer:
        "It is derived using the technique of completing the square from the standard form of a quadratic function.",
    },
    {
      section: "Set Theory",
      question:
        "What is the difference between union and intersection in sets?",
      answer:
        "The union represents all values in both sets, while the intersection represents values present in both sets.",
    },
    {
      section: "Functions and Graphs",
      question: "Why is a circle not a function graphically?",
      answer: "Because it fails the vertical line test.",
    },
    {
      section: "Geometry",
      question: "How can you find the center of a circle algebraically?",
      answer: "By using the method of completing the square.",
    },
    {
      section: "Functions",
      question: "What defines a set of relations as a function?",
      answer:
        "Every input has exactly one unique output, but inputs can have the same output.",
    },
    {
      section: "Functions and Graphs",
      question: "What indicates that a function reflects over the x-axis?",
      answer: "It must have a negative leading coefficient.",
    },
    {
      section: "Algebra",
      question: "What does it mean to 'solve' a literal equation?",
      answer:
        "To use correct mathematical operations to isolate the target variable.",
    },
    {
      section: "Problem-Solving",
      question: "What is a good test-taking skill when solving equations?",
      answer:
        "Re-evaluate your answer by plugging it back into the original equation to verify if it holds true.",
    },
    {
      section: "Functions",
      question: "What does the notation f(g(x)) direct you to do?",
      answer:
        "Input the entire g(x) function into any x variable present in f(x).",
    },
    {
      section: "Linear Equations",
      question:
        "What does the solution to a system of linear equations represent graphically?",
      answer: "It indicates the point where the two lines intersect.",
    },
    {
      section: "Polynomial Functions",
      question:
        "When using synthetic division, what value do you use to evaluate?",
      answer:
        "You use the potential zero of the function, which is always the opposite sign of how it appears in factored form.",
    },
    {
      section: "Polynomial Functions",
      question: "How is the degree of a polynomial determined?",
      answer:
        "It's the sum of all powers in the term with the highest combined power. For single-variable polynomials, it's simply the highest exponent.",
    },
    {
      section: "Functions and Graphs",
      question: "What is a turning point in a graph?",
      answer:
        "It represents where a graph changes from increasing to decreasing or vice versa.",
    },
    {
      section: "Functions and Graphs",
      question: "What is the maximum number of turning points for a function?",
      answer: "At most, it's the degree of the function minus 1.",
    },
    {
      section: "Functions",
      question: "What does the domain of a function represent?",
      answer: "It represents the set of all its inputs.",
    },
    {
      section: "Functions",
      question: "What does the range of a function represent?",
      answer:
        "It represents the set of all outputs produced by the inputs in the domain.",
    },
    {
      section: "Functions and Graphs",
      question: "What does the 'end behavior' of a function describe?",
      answer:
        "It describes how the graph behaves as inputs decrease forever and increase forever.",
    },
    {
      section: "Algebra Basics",
      question: "What does 2x mean in algebraic notation?",
      answer: "It means 2 multiplied by x, where 2 is the coefficient of x.",
    },
    {
      section: "Properties of Operations",
      question: "What does the distributive property state?",
      answer:
        "It states that a(b + c) = ab + ac, where multiplication is distributed over addition.",
    },
    {
      section: "Order of Operations",
      question: "What does the acronym PEMDAS stand for in mathematics?",
      answer:
        "It stands for Parentheses, Exponents, Multiplication and Division (from left to right), Addition and Subtraction (from left to right).",
    },
    {
      section: "Exponents",
      question: "What does a negative exponent indicate?",
      answer:
        "It indicates the reciprocal of the base raised to the positive of that exponent, e.g., x^(-n) = 1/(x^n).",
    },
    {
      section: "Complex Numbers",
      question: "How are complex numbers represented graphically?",
      answer:
        "They are represented on a complex plane, where the real part is on the x-axis and the imaginary part on the y-axis.",
    },
    {
      section: "Geometry",
      question: "What is true about the slopes of parallel lines?",
      answer: "Parallel lines have the same slope.",
    },
    {
      section: "Algebra",
      question: "What is the goal of factoring in algebra?",
      answer:
        "The goal is to express a polynomial as a product of its factors.",
    },
    {
      section: "Geometry",
      question: "What defines similar triangles?",
      answer:
        "Similar triangles have the same shape but not necessarily the same size, with corresponding angles equal and sides proportional.",
    },
  ],
  Chemistry: [
    { section: "Element Names", question: "H", answer: "Hydrogen" },
    { section: "Element Symbols", question: "Hydrogen", answer: "H" },
    { section: "Element Names", question: "He", answer: "Helium" },
    { section: "Element Symbols", question: "Helium", answer: "He" },
    { section: "Element Names", question: "Li", answer: "Lithium" },
    { section: "Element Symbols", question: "Lithium", answer: "Li" },
    { section: "Element Names", question: "Be", answer: "Beryllium" },
    { section: "Element Symbols", question: "Beryllium", answer: "Be" },
    { section: "Element Names", question: "B", answer: "Boron" },
    { section: "Element Symbols", question: "Boron", answer: "B" },
    { section: "Element Names", question: "C", answer: "Carbon" },
    { section: "Element Symbols", question: "Carbon", answer: "C" },
    { section: "Element Names", question: "N", answer: "Nitrogen" },
    { section: "Element Symbols", question: "Nitrogen", answer: "N" },
    { section: "Element Names", question: "O", answer: "Oxygen" },
    { section: "Element Symbols", question: "Oxygen", answer: "O" },
    { section: "Element Names", question: "F", answer: "Fluorine" },
    { section: "Element Symbols", question: "Fluorine", answer: "F" },
    { section: "Element Names", question: "Ne", answer: "Neon" },
    { section: "Element Symbols", question: "Neon", answer: "Ne" },
    { section: "Element Names", question: "Na", answer: "Sodium" },
    { section: "Element Symbols", question: "Sodium", answer: "Na" },
    { section: "Element Names", question: "Mg", answer: "Magnesium" },
    { section: "Element Symbols", question: "Magnesium", answer: "Mg" },
    { section: "Element Names", question: "Al", answer: "Aluminum" },
    { section: "Element Symbols", question: "Aluminum", answer: "Al" },
    { section: "Element Names", question: "Si", answer: "Silicon" },
    { section: "Element Symbols", question: "Silicon", answer: "Si" },
    { section: "Element Names", question: "P", answer: "Phosphorus" },
    { section: "Element Symbols", question: "Phosphorus", answer: "P" },
    { section: "Element Names", question: "S", answer: "Sulfur" },
    { section: "Element Symbols", question: "Sulfur", answer: "S" },
    { section: "Element Names", question: "Cl", answer: "Chlorine" },
    { section: "Element Symbols", question: "Chlorine", answer: "Cl" },
    { section: "Element Names", question: "Ar", answer: "Argon" },
    { section: "Element Symbols", question: "Argon", answer: "Ar" },
    { section: "Element Names", question: "K", answer: "Potassium" },
    { section: "Element Symbols", question: "Potassium", answer: "K" },
    { section: "Element Names", question: "Ca", answer: "Calcium" },
    { section: "Element Symbols", question: "Calcium", answer: "Ca" },
    { section: "Element Names", question: "Sc", answer: "Scandium" },
    { section: "Element Symbols", question: "Scandium", answer: "Sc" },
    { section: "Element Names", question: "Ti", answer: "Titanium" },
    { section: "Element Symbols", question: "Titanium", answer: "Ti" },
    { section: "Element Names", question: "V", answer: "Vanadium" },
    { section: "Element Symbols", question: "Vanadium", answer: "V" },
    { section: "Element Names", question: "Cr", answer: "Chromium" },
    { section: "Element Symbols", question: "Chromium", answer: "Cr" },
    { section: "Element Names", question: "Mn", answer: "Manganese" },
    { section: "Element Symbols", question: "Manganese", answer: "Mn" },
    { section: "Element Names", question: "Fe", answer: "Iron" },
    { section: "Element Symbols", question: "Iron", answer: "Fe" },
    { section: "Element Names", question: "Co", answer: "Cobalt" },
    { section: "Element Symbols", question: "Cobalt", answer: "Co" },
    { section: "Element Names", question: "Ni", answer: "Nickel" },
    { section: "Element Symbols", question: "Nickel", answer: "Ni" },
    { section: "Element Names", question: "Cu", answer: "Copper" },
    { section: "Element Symbols", question: "Copper", answer: "Cu" },
    { section: "Element Names", question: "Zn", answer: "Zinc" },
    { section: "Element Symbols", question: "Zinc", answer: "Zn" },
    { section: "Element Names", question: "Ga", answer: "Gallium" },
    { section: "Element Symbols", question: "Gallium", answer: "Ga" },
    { section: "Element Names", question: "Ge", answer: "Germanium" },
    { section: "Element Symbols", question: "Germanium", answer: "Ge" },
    { section: "Element Names", question: "As", answer: "Arsenic" },
    { section: "Element Symbols", question: "Arsenic", answer: "As" },
    { section: "Element Names", question: "Se", answer: "Selenium" },
    { section: "Element Symbols", question: "Selenium", answer: "Se" },
    { section: "Element Names", question: "Br", answer: "Bromine" },
    { section: "Element Symbols", question: "Bromine", answer: "Br" },
    { section: "Element Names", question: "Kr", answer: "Krypton" },
    { section: "Element Symbols", question: "Krypton", answer: "Kr" },
    { section: "Element Names", question: "Rb", answer: "Rubidium" },
    { section: "Element Symbols", question: "Rubidium", answer: "Rb" },
    { section: "Element Names", question: "Ag", answer: "Silver" },
    { section: "Element Symbols", question: "Silver", answer: "Ag" },
    { section: "Element Names", question: "Cd", answer: "Cadmium" },
    { section: "Element Symbols", question: "Cadmium", answer: "Cd" },
    { section: "Element Names", question: "Sn", answer: "Tin" },
    { section: "Element Symbols", question: "Tin", answer: "Sn" },
    { section: "Element Names", question: "Xe", answer: "Xenon" },
    { section: "Element Symbols", question: "Xenon", answer: "Xe" },
    { section: "Element Names", question: "Cs", answer: "Cesium" },
    { section: "Element Symbols", question: "Cesium", answer: "Cs" },
    { section: "Element Names", question: "Ba", answer: "Barium" },
    { section: "Element Symbols", question: "Barium", answer: "Ba" },
    { section: "Element Names", question: "Au", answer: "Gold" },
    { section: "Element Symbols", question: "Gold", answer: "Au" },
    { section: "Element Names", question: "Hg", answer: "Mercury" },
    { section: "Element Symbols", question: "Mercury", answer: "Hg" },
    { section: "Element Names", question: "Pb", answer: "Lead" },
    { section: "Element Symbols", question: "Lead", answer: "Pb" },
    { section: "Element Names", question: "Bi", answer: "Bismuth" },
    { section: "Element Symbols", question: "Bismuth", answer: "Bi" },
    { section: "Element Names", question: "Rn", answer: "Radon" },
    { section: "Element Symbols", question: "Radon", answer: "Rn" },
    { section: "Element Names", question: "U", answer: "Uranium" },
    { section: "Element Symbols", question: "Uranium", answer: "U" },
    { section: "Element Names", question: "Pu", answer: "Plutonium" },
    { section: "Element Symbols", question: "Plutonium", answer: "Pu" },
  ],
  "1.3.1 SOHO Routers": [
    {
      section: "SOHO Routers",
      question: "What does SOHO stand for in networking?",
      answer: "Small Office/Home Office",
    },
    {
      section: "SOHO Routers",
      question: "How is a SOHO network classified in terms of network size?",
      answer:
        "It is a category of LAN (Local Area Network) with a small number of computing hosts",
    },
    {
      section: "SOHO Routers",
      question:
        "What is the main characteristic of a SOHO network's connectivity?",
      answer:
        "It typically relies on a single integrated appliance for local and Internet connectivity",
    },
    {
      section: "SOHO Routers",
      question: "What is the primary function of a SOHO router?",
      answer: "To forward traffic between the LAN and the WAN",
    },
    {
      section: "SOHO Routers",
      question: "Is routing the only function of a SOHO router?",
      answer: "No, routing is just one of its functions",
    },
    {
      section: "SOHO Routers",
      question:
        "What model can be used to analyze the functions of a SOHO router?",
      answer: "The OSI model",
    },
  ],
  "1.3.2 Physical Layer Functions": [
    {
      section: "Physical Layer Functions",
      question:
        "What are the three main physical interfaces provided by a SOHO router at the physical layer?",
      answer:
        "1. RJ45 ports for local cabled network (LAN ports)<br>2. Radio antennae for wireless signals<br>3. A modem to connect to the ISP's network (WAN port)",
    },
    {
      section: "Physical Layer Functions",
      question:
        "How many RJ45 ports are typically available for the local cabled network (LAN) on a SOHO router?",
      answer: "Usually four",
    },
    {
      section: "Physical Layer Functions",
      question: "What is the purpose of the radio antennae on a SOHO router?",
      answer: "To transmit and receive wireless signals for Wi-Fi connectivity",
    },
    {
      section: "Physical Layer Functions",
      question:
        "What is the common label for the port that connects a SOHO router to the Internet Service Provider's network?",
      answer: "WAN port",
    },
    {
      section: "Physical Layer Functions",
      question:
        "What type of connector might be used for the WAN port on a SOHO router designed for fiber-to-the-premises Internet service?",
      answer: "An RJ45 port using Ethernet technology",
    },
    {
      section: "Physical Layer Functions",
      question:
        "Name two alternative types of WAN modem connections that might be found on SOHO routers for different types of Internet services.",
      answer:
        "1. RJ11 port for digital subscriber line (DSL) service<br>2. F-connector coax jack for cable service",
    },
  ],
  "Port Numbers": [
    {
      section: "Ports",
      question: "What port is File Transfer Protocol (FTP)?",
      answer: "20/21",
    },
    {
      section: "Ports",
      question: "What protocol uses port 20/21?",
      answer: "File Transfer Protocol (FTP)",
    },
    {
      section: "Ports",
      question: "What port is Secure Shell (SSH)?",
      answer: "22",
    },
    {
      section: "Ports",
      question: "What protocol uses port 22?",
      answer: "Secure Shell (SSH) and Secure File Transfer Protocol (SFTP)",
    },
    {
      section: "Ports",
      question: "What port is Secure File Transfer Protocol (SFTP)?",
      answer: "22",
    },
    { section: "Ports", question: "What port is Telnet?", answer: "23" },
    {
      section: "Ports",
      question: "What protocol uses port 23?",
      answer: "Telnet",
    },
    {
      section: "Ports",
      question: "What port is Simple Mail Transfer Protocol (SMTP)?",
      answer: "25",
    },
    {
      section: "Ports",
      question: "What protocol uses port 25?",
      answer: "Simple Mail Transfer Protocol (SMTP)",
    },
    {
      section: "Ports",
      question: "What port is Domain Name System (DNS)?",
      answer: "53",
    },
    {
      section: "Ports",
      question: "What protocol uses port 53?",
      answer: "Domain Name System (DNS)",
    },
    {
      section: "Ports",
      question: "What port is Dynamic Host Configuration Protocol (DHCP)?",
      answer: "67/68",
    },
    {
      section: "Ports",
      question: "What protocol uses port 67/68?",
      answer: "Dynamic Host Configuration Protocol (DHCP)",
    },
    {
      section: "Ports",
      question: "What port is Trivial File Transfer Protocol (TFTP)?",
      answer: "69",
    },
    {
      section: "Ports",
      question: "What protocol uses port 69?",
      answer: "Trivial File Transfer Protocol (TFTP)",
    },
    {
      section: "Ports",
      question: "What port is Hypertext Transfer Protocol (HTTP)?",
      answer: "80",
    },
    {
      section: "Ports",
      question: "What protocol uses port 80?",
      answer: "Hypertext Transfer Protocol (HTTP)",
    },
    {
      section: "Ports",
      question: "What port is Post Office Protocol v3 (POP3)?",
      answer: "110",
    },
    {
      section: "Ports",
      question: "What protocol uses port 110?",
      answer: "Post Office Protocol v3 (POP3)",
    },
    {
      section: "Ports",
      question: "What port is Network Time Protocol (NTP)?",
      answer: "123",
    },
    {
      section: "Ports",
      question: "What protocol uses port 123?",
      answer: "Network Time Protocol (NTP)",
    },
    {
      section: "Ports",
      question: "What port is Internet Message Access Protocol (IMAP)?",
      answer: "143",
    },
    {
      section: "Ports",
      question: "What protocol uses port 143?",
      answer: "Internet Message Access Protocol (IMAP)",
    },
    {
      section: "Ports",
      question: "What port is Simple Network Management Protocol (SNMP)?",
      answer: "161/162",
    },
    {
      section: "Ports",
      question: "What protocol uses port 161/162?",
      answer: "Simple Network Management Protocol (SNMP)",
    },
    {
      section: "Ports",
      question: "What port is Lightweight Directory Access Protocol (LDAP)?",
      answer: "389",
    },
    {
      section: "Ports",
      question: "What protocol uses port 389?",
      answer: "Lightweight Directory Access Protocol (LDAP)",
    },
    {
      section: "Ports",
      question: "What port is Hypertext Transfer Protocol Secure (HTTPS)?",
      answer: "443",
    },
    {
      section: "Ports",
      question: "What protocol uses port 443?",
      answer: "Hypertext Transfer Protocol Secure (HTTPS)",
    },
    {
      section: "Ports",
      question: "What port is Server Message Block (SMB)?",
      answer: "445",
    },
    {
      section: "Ports",
      question: "What protocol uses port 445?",
      answer: "Server Message Block (SMB)",
    },
    { section: "Ports", question: "What port is Syslog?", answer: "514" },
    {
      section: "Ports",
      question: "What protocol uses port 514?",
      answer: "Syslog",
    },
    { section: "Ports", question: "What port is SMTP TLS?", answer: "587" },
    {
      section: "Ports",
      question: "What protocol uses port 587?",
      answer: "SMTP TLS",
    },
    {
      section: "Ports",
      question: "What port is Lightweight Directory Access Protocol (LDAPS)?",
      answer: "636",
    },
    {
      section: "Ports",
      question: "What protocol uses port 636?",
      answer: "Lightweight Directory Access Protocol (over SSL) (LDAPS)",
    },
    {
      section: "Ports",
      question: "What port is IMAP over SSL?",
      answer: "993",
    },
    {
      section: "Ports",
      question: "What protocol uses port 993?",
      answer: "IMAP over SSL",
    },
    {
      section: "Ports",
      question: "What port is POP3 over SSL?",
      answer: "995",
    },
    {
      section: "Ports",
      question: "What protocol uses port 995?",
      answer: "POP3 over SSL",
    },
    {
      section: "Ports",
      question: "What port is Structured Query Language (SQL) Server?",
      answer: "1433",
    },
    {
      section: "Ports",
      question: "What protocol uses port 1433?",
      answer: "Structured Query Language (SQL) Server",
    },
    { section: "Ports", question: "What port is SOLnet?", answer: "1521" },
    {
      section: "Ports",
      question: "What protocol uses port 1521?",
      answer: "SOLnet",
    },
    { section: "Ports", question: "What port is MySQL?", answer: "3306" },
    {
      section: "Ports",
      question: "What protocol uses port 3306?",
      answer: "MySQL",
    },
    {
      section: "Ports",
      question: "What port is Remote Desktop Protocol (RDP)?",
      answer: "3389",
    },
    {
      section: "Ports",
      question: "What protocol uses port 3389?",
      answer: "Remote Desktop Protocol (RDP)",
    },
    {
      section: "Ports",
      question: "What port is Session Initiation Protocol (SIP)?",
      answer: "5060/5061",
    },
    {
      section: "Ports",
      question: "What protocol uses port 5060/5061?",
      answer: "Session Initiation Protocol (SIP)",
    },
  ],
  "Cybersecurity Networking UNIT 1": [
    {
      section: "Foundational Cybersecurity Concepts",
      question:
        "What are the three core components of the CIA Triad in cybersecurity?",
      answer: "Confidentiality, Integrity, and Availability.",
    },
    {
      section: "Foundational Cybersecurity Concepts",
      question: "What does confidentiality ensure in cybersecurity?",
      answer:
        "Confidentiality ensures that data is accessible only to authorized individuals, systems, or processes.",
    },
    {
      section: "Foundational Cybersecurity Concepts",
      question: "What is the purpose of integrity in cybersecurity?",
      answer:
        "Integrity ensures that data is accurate and trustworthy, including non-repudiation to verify the origin of data.",
    },
    {
      section: "Foundational Cybersecurity Concepts",
      question: "What does availability mean in the context of cybersecurity?",
      answer:
        "Availability ensures that data and services are accessible when required by authorized individuals.",
    },
    {
      section: "Personal Digital Security",
      question:
        "How can individuals limit the risk of identity theft and credit card fraud?",
      answer:
        "By limiting the sharing of personal information on public websites and being cautious about emails from unknown senders.",
    },
    {
      section: "Personal Digital Security",
      question:
        "Why is using secure Internet connections important for personal digital security?",
      answer:
        "Using secure connections, such as VPNs on public Wi-Fi, helps prevent sensitive information from being intercepted.",
    },
    {
      section: "Personal Digital Security",
      question: "What are some practices for strong password security?",
      answer:
        "Use strong, unique passwords for each account, update them regularly, and enable multifactor authentication (MFA).",
    },
    {
      section: "Personal Digital Security",
      question: "How does multifactor authentication (MFA) enhance security?",
      answer:
        "MFA requires two or more types of information to log in, making unauthorized access more difficult even if a password is compromised.",
    },
    {
      section: "Personal Digital Security",
      question: "Why is it important to keep software up to date?",
      answer:
        "Up-to-date software applies the latest security patches to address known vulnerabilities.",
    },
    {
      section: "Personal Digital Security",
      question: "How does antivirus software protect your data?",
      answer:
        "It detects and prevents malicious files from being downloaded and executed.",
    },
    {
      section: "Personal Digital Security",
      question: "What is the benefit of maintaining updated backups?",
      answer:
        "Backups help recover from cyber incidents or hardware failures with minimal data loss.",
    },
    {
      section: "Enterprise Security",
      question:
        "How is enterprise security different from personal digital security?",
      answer:
        "Enterprise security protects an organization's managed data, involves more complex infrastructure, and must comply with laws and regulations.",
    },
    {
      section: "Enterprise Security",
      question: "What are the three states of data?",
      answer: "Data at rest, data in transit, and data in use.",
    },
    {
      section: "Enterprise Security",
      question: "How is data at rest protected?",
      answer:
        "By controlling physical and administrative access to storage systems.",
    },
    {
      section: "Enterprise Security",
      question: "How is data in transit protected?",
      answer:
        "By monitoring and securing data as it moves through network infrastructure.",
    },
    {
      section: "Enterprise Security",
      question: "How is data in use protected?",
      answer:
        "By verifying that the user accessing the data is legitimate and authorized.",
    },
    {
      section: "Enterprise Security",
      question: "Why do organizations classify data?",
      answer:
        "To determine the level of security controls required, with higher sensitivity data requiring higher security.",
    },
    {
      section: "Introduction to Computer Systems",
      question: "What are the main hardware components of a computer system?",
      answer:
        "CPU, RAM, storage devices (HDD/SSD), motherboard, and peripheral components.",
    },
    {
      section: "Introduction to Computer Systems",
      question: "What is the function of the CPU?",
      answer:
        "The CPU executes arithmetic, logic, and input/output operations.",
    },
    {
      section: "Introduction to Computer Systems",
      question: "What is the difference between RAM and storage?",
      answer:
        "RAM temporarily holds data for immediate use and is volatile; storage holds data long-term and is non-volatile.",
    },
    {
      section: "Introduction to Computer Systems",
      question: "What is firmware?",
      answer:
        "Firmware is software that manages hardware components, including device initialization and communication.",
    },
    {
      section: "Introduction to Computer Systems",
      question: "What is virtualization?",
      answer:
        "Virtualization allows multiple virtual instances or environments to run on a single hardware system, increasing efficiency and security.",
    },
    {
      section: "Introduction to Command Line",
      question:
        "How does a Windows file system differ from a Linux file system?",
      answer:
        "Windows uses drive letters (e.g., C:\\), while Linux starts from the root directory (/).",
    },
    {
      section: "Introduction to Command Line",
      question: "What is an absolute path versus a relative path?",
      answer:
        "An absolute path starts from the root or drive letter; a relative path is based on the current directory.",
    },
    {
      section: "Introduction to Command Line",
      question: "What are some common CLI commands for file system navigation?",
      answer:
        "cd (change directory), ls/dir (list contents), pwd (print working directory), mkdir (make directory), mv (move/rename), cp (copy), touch (create file).",
    },
    {
      section: "Introduction to Networks",
      question: "What are the essential components of a computer network?",
      answer:
        "Multiple connected devices (nodes), transmission medium, and communication protocols.",
    },
    {
      section: "Introduction to Networks",
      question: "What is a network node and a host?",
      answer:
        "A node is any connected device; a host actively generates or consumes data (e.g., computers, servers).",
    },
    {
      section: "Introduction to Networks",
      question: "How do computers transmit data in a network?",
      answer:
        "By converting data into binary and sending it as light, electricity, or electromagnetic waves via a NIC.",
    },
    {
      section: "Introduction to Networks",
      question: "How do you convert decimal to binary?",
      answer:
        "Write 1s in the binary place values (powers of 2) that sum up to the decimal number. For example, 23 (decimal) is 10111 (binary).",
    },
    {
      section: "Introduction to Networks",
      question: "What are the primary types of networks by geographical size?",
      answer:
        "LAN (Local Area Network), WAN (Wide Area Network), PAN (Personal Area Network), MAN (Metropolitan Area Network).",
    },
    {
      section: "SOHO vs. Enterprise Networks",
      question: "What is a SOHO network?",
      answer:
        "A Small Office/Home Office network serving a small number of users in a single LAN.",
    },
    {
      section: "SOHO vs. Enterprise Networks",
      question: "What devices are commonly found in a SOHO network?",
      answer:
        "Modem, router, wireless access point, switch, firewall, and endpoints (laptops, PCs, printers, cell phones).",
    },
    {
      section: "SOHO vs. Enterprise Networks",
      question:
        "Why do SOHO and enterprise networks have different security implications?",
      answer:
        "SOHO networks are smaller, simpler, and less expensive, while enterprise networks handle more users, devices, and require more complex security and infrastructure.",
    },
  ],
  "Unit 2 Study Guide: Layers, Protocols, and Addressing": [
    {
      section: "OSI and TCP/IP Models",
      question:
        "What is the primary purpose of networking models like OSI and TCP/IP?",
      answer:
        "They provide a common standard for computer networking and promote interoperability between hardware and software from different manufacturers.",
    },
    {
      section: "OSI and TCP/IP Models",
      question:
        "How do networking models use layers to manage data transmission?",
      answer:
        "They break down communication into smaller, manageable steps, with each layer using different protocols to encapsulate information before passing it to the next layer.",
    },
    {
      section: "OSI and TCP/IP Models",
      question:
        "List the seven layers of the OSI model in order from Layer 1 to Layer 7.",
      answer:
        "Physical, Data Link, Network, Transport, Session, Presentation, Application.",
    },
    {
      section: "OSI and TCP/IP Models",
      question:
        "What is the function of the Physical Layer (Layer 1) in the OSI model?",
      answer:
        "It deals with the bits transmitted via the medium (cable or air waves) and breaks down information into bits for transmission.",
    },
    {
      section: "OSI and TCP/IP Models",
      question:
        "Which OSI layer is responsible for error detection and correction during data transfer?",
      answer: "Transport Layer (Layer 4).",
    },
    {
      section: "OSI and TCP/IP Models",
      question:
        "How do the layers of the TCP/IP model correlate with the OSI model?",
      answer:
        "Network Access Layer = OSI Layers 1 & 2; Internet Layer = OSI Layer 3; Transport Layer = OSI Layer 4; Application Layer = OSI Layers 5, 6, & 7.",
    },
    {
      section: "Encapsulation and De-encapsulation",
      question: "What is encapsulation in networking?",
      answer:
        "The process of a sending node adding headers and trailers to data as it travels down through the layers of the OSI or TCP/IP models.",
    },
    {
      section: "Encapsulation and De-encapsulation",
      question: "What is a Protocol Data Unit (PDU)?",
      answer:
        "A single unit of information transmitted, which changes at each layer as information is encapsulated.",
    },
    {
      section: "Encapsulation and De-encapsulation",
      question: "What does the Data Link Layer add during encapsulation?",
      answer:
        "It adds a header (with source/destination MAC addresses) and a trailer (for error checking) to create a Frame.",
    },
    {
      section: "Encapsulation and De-encapsulation",
      question: "Describe de-encapsulation in networking.",
      answer:
        "It is the process on the receiving node of removing headers and trailers added during encapsulation, as data moves up the layers.",
    },
    {
      section: "Introduction to Protocols and Servers",
      question: "What is the main difference between TCP and UDP?",
      answer:
        "TCP is connection-oriented and guarantees delivery with acknowledgments, while UDP is connectionless and does not guarantee delivery or order.",
    },
    {
      section: "Introduction to Protocols and Servers",
      question:
        "Give an example of an application that typically uses TCP and one that uses UDP.",
      answer:
        "TCP: web, email, chat applications. UDP: video streaming, gaming applications.",
    },
    {
      section: "Introduction to Protocols and Servers",
      question: "What is a server in networking?",
      answer:
        "A computer with special software that provides a centralized resource or service to other computers in a network.",
    },
    {
      section: "Introduction to Protocols and Servers",
      question: "What are the default ports for HTTP, HTTPS, and DNS?",
      answer: "HTTP: 80, HTTPS: 443, DNS: 53.",
    },
    {
      section: "Introduction to Protocols and Servers",
      question: "What is the role of logical ports in networking?",
      answer:
        "They identify the intended application receiving data and allow servers to communicate using specific ports.",
    },
    {
      section: "Cabling",
      question: "What is the main advantage of twisted pair cables?",
      answer: "They are affordable and easy to install.",
    },
    {
      section: "Cabling",
      question:
        "What is the primary benefit of fiber optic cables compared to twisted pair and coaxial?",
      answer:
        "They transmit signals using light, making them immune to EMI and capable of carrying signals much farther.",
    },
    {
      section: "Cabling",
      question:
        "What does 'CAT' stand for in twisted pair cables, and why are there different categories?",
      answer:
        "'CAT' stands for category; categories (like CAT5, CAT6) indicate bandwidth and speed capabilities.",
    },
    {
      section: "Cabling",
      question: "Which twisted pair cable supports up to 10 Gbps?",
      answer: "CAT6a.",
    },
    {
      section: "Cabling",
      question:
        "List two factors to consider when choosing a network cable type.",
      answer:
        "Signal strength, distance, interference, speed, cost, security, and NIC compatibility.",
    },
    {
      section: "Network Topologies",
      question: "What is the difference between physical and logical topology?",
      answer:
        "Physical topology is how devices are physically connected; logical topology is how data travels within the network.",
    },
    {
      section: "Network Topologies",
      question: "Describe the main characteristic of a bus topology.",
      answer:
        "All nodes are connected to a single medium; it is simple and inexpensive but not scalable or secure.",
    },
    {
      section: "Network Topologies",
      question: "What is the main advantage of a star topology?",
      answer:
        "It is easier to scale and troubleshoot, and nodes generally only receive intended data.",
    },
    {
      section: "Network Topologies",
      question: "Why is a full mesh topology considered resilient?",
      answer:
        "Because each node is directly connected to every other node, so a single node failure does not cause network failure.",
    },
    {
      section: "Network Topologies",
      question:
        "How does a client-server network differ from a peer-to-peer network?",
      answer:
        "Client-server has centralized services and security, while peer-to-peer is decentralized and less secure.",
    },
    {
      section: "Physical Addressing",
      question: "What is a MAC address?",
      answer:
        "A unique 48-bit number assigned to a NIC, used to identify a host within a local area network.",
    },
    {
      section: "Physical Addressing",
      question: "How is a MAC address typically written?",
      answer:
        "As six pairs of hexadecimal numbers separated by hyphens or colons (e.g., 00:1b:63:84:45:e6).",
    },
    {
      section: "Physical Addressing",
      question: "Which OSI layer uses MAC addresses?",
      answer: "Data Link Layer (Layer 2).",
    },
    {
      section: "Physical Addressing",
      question: "What is the structure of a MAC address?",
      answer:
        "First 24 bits are the Organizational Unique Identifier (OUI), last 24 bits identify the specific device.",
    },
    {
      section: "Physical Addressing",
      question: "What numbering system is used for MAC addresses and why?",
      answer:
        "Hexadecimal, because it is a shorthand for binary and makes large binary numbers easier to read and write.",
    },
    {
      section: "Logical Addressing",
      question: "What is an IP address used for?",
      answer: "To identify hosts between different LANs.",
    },
    {
      section: "Logical Addressing",
      question: "How many bits are in an IPv4 address and how is it written?",
      answer: "32 bits, written in dotted decimal format (e.g., 192.168.1.1).",
    },
    {
      section: "Logical Addressing",
      question: "Why was IPv6 created and how many bits does it use?",
      answer: "To address the exhaustion of IPv4 addresses; it uses 128 bits.",
    },
    {
      section: "Logical Addressing",
      question: "How can an IPv6 address be abbreviated?",
      answer:
        "By replacing the longest string of consecutive zeros with a double colon (once) and omitting leading zeros.",
    },
    {
      section: "Logical Addressing",
      question: "What is the main difference between MAC and IP addresses?",
      answer:
        "MAC addresses are physical and tied to hardware; IP addresses are logical and assigned based on the network.",
    },
    {
      section: "Logical Addressing",
      question: "Which protocol maps MAC addresses to IP addresses?",
      answer: "Address Resolution Protocol (ARP).",
    },
    {
      section: "Logical Addressing",
      question: "How can you find a device's MAC and IP addresses?",
      answer:
        "Using CLI tools like ipconfig (Windows) or ifconfig (Linux/Mac), or in the network settings GUI.",
    },
    {
      section: "IP Configuration",
      question: "What is DHCP?",
      answer:
        "Dynamic Host Configuration Protocol, used to automatically assign IPv4 addresses and configure network settings.",
    },
    {
      section: "IP Configuration",
      question: "How can an IP address be assigned to a device?",
      answer: "Manually by a user or automatically using DHCP.",
    },
    {
      section: "IP Configuration",
      question: "Which CLI command verifies network settings on Windows?",
      answer: "ipconfig /all",
    },
    {
      section: "IP Configuration",
      question: "Which CLI command verifies network settings on Linux or Mac?",
      answer: "ifconfig",
    },
  ],
  "Unit 3": [
    {
      section: "Switching",
      question:
        "What does a switch use to track which devices are connected to which physical ports?",
      answer:
        "A switch uses a content addressable memory (CAM) table to track which devices are connected to which physical ports.",
    },
    {
      section: "Switching",
      question:
        "What information does a switch store in its CAM table when it receives a frame?",
      answer:
        "The switch stores the source MAC address and the corresponding physical port in its CAM table when it receives a frame.",
    },
    {
      section: "Switching",
      question:
        "At which layer of the OSI model does a typical switch operate?",
      answer:
        "A typical switch operates at the data link layer (Layer 2) of the OSI model.",
    },
    {
      section: "Switching",
      question:
        "How does a switch forward a frame if the destination MAC address is not found in its CAM table?",
      answer:
        "If the destination MAC address is not found in the CAM table, the switch sends the frame out of all other physical ports (flooding).",
    },
    {
      section: "Switching",
      question:
        "How does a switch forward a frame if the destination MAC address is found in its CAM table?",
      answer:
        "The switch sends the frame out of the corresponding physical port associated with the destination MAC address.",
    },
    {
      section: "Switching",
      question: "How do switches help reduce data collisions in a network?",
      answer:
        "Switches prevent data collisions by giving each connection its own data lane, isolating traffic within each port.",
    },
    {
      section: "VLANs",
      question: "What is a VLAN?",
      answer:
        "A VLAN (Virtual Local Area Network) segments a network by grouping subsets of devices physically connected to a switch into separate, logical LANs.",
    },
    {
      section: "VLANs",
      question: "How do VLANs improve network performance?",
      answer:
        "VLANs improve network performance by separating network traffic into smaller logical LANs, reducing congestion, and allowing messages to reach destinations faster.",
    },
    {
      section: "VLANs",
      question: "How do VLANs enhance network security?",
      answer:
        "VLANs increase security by limiting broadcast messages to a specific VLAN, reducing the number of messages a host receives that aren't intended for it.",
    },
    {
      section: "VLANs",
      question: "What is one benefit of using VLANs for network management?",
      answer:
        "VLANs allow logical grouping of users or devices based on function, department, or project, making it easier to manage and troubleshoot network issues.",
    },
    {
      section: "Switch Attacks",
      question: "What is MAC spoofing?",
      answer:
        "MAC spoofing occurs when a device uses software to mask its original MAC address and mimic the MAC address of another device.",
    },
    {
      section: "Switch Attacks",
      question: "What is the risk of MAC spoofing?",
      answer:
        "MAC spoofing allows a device to potentially receive network traffic not intended for it by impersonating another device's MAC address.",
    },
    {
      section: "Switch Attacks",
      question: "What is MAC flooding?",
      answer:
        "MAC flooding occurs when a switch is sent enough frames with different source MAC addresses to overflow the CAM table or cause it to run out of memory.",
    },
    {
      section: "Switch Attacks",
      question: "What can happen to a switch during a MAC flooding attack?",
      answer:
        "MAC flooding can cause the switch to enter a fail-open state, where all network traffic is broadcast to all nodes instead of being directed to the intended recipient.",
    },
    {
      section: "Port Security",
      question: "What is port security on a switch?",
      answer:
        "Port security applies restrictions on physical ports on a switch, such as limiting which MAC addresses can use a port or how many devices can connect.",
    },
    {
      section: "Port Security",
      question: "How does setting unused ports to 'down' improve security?",
      answer:
        "Setting unused ports to 'down' prevents unauthorized devices from physically connecting to the network through those ports.",
    },
    {
      section: "Port Security",
      question:
        "How does limiting the number of MAC addresses per port protect the switch?",
      answer:
        "Limiting the number of MAC addresses per port helps protect the switch’s CAM table from being flooded and prevents unauthorized connections.",
    },
    {
      section: "Port Security",
      question:
        "How can port security be configured to meet network requirements?",
      answer:
        "Port security can be configured to allow specific MAC addresses, set a maximum number of devices per port, and minimize the risk of external access to data.",
    },
    {
      section: "Application Layer Protocols",
      question: "What is the purpose of FTP and its default ports?",
      answer:
        "FTP (File Transfer Protocol) transfers files between a client and server. It uses default ports 20 and 21.",
    },
    {
      section: "Application Layer Protocols",
      question:
        "What protocol is used for secure file transfer and what port does it use?",
      answer:
        "SFTP (Secure File Transfer Protocol) is used for secure, encrypted file transfer and uses default port 22.",
    },
    {
      section: "Application Layer Protocols",
      question:
        "Which protocol is used to send emails between servers and what is its default port?",
      answer:
        "SMTP (Simple Mail Transfer Protocol) is used to send emails between servers and uses default port 25.",
    },
    {
      section: "Application Layer Protocols",
      question: "What is POP3 used for and what is its default port?",
      answer:
        "POP3 (Post Office Protocol version 3) is used to retrieve email messages from a mail server to a client and uses default port 110.",
    },
    {
      section: "Application Layer Protocols",
      question: "What is IMAP used for and what is its default port?",
      answer:
        "IMAP (Internet Message Access Protocol) is used to retrieve email messages from a mail server to a client and uses default port 143.",
    },
    {
      section: "Application Layer Protocols",
      question: "What is NTP and what port does it use?",
      answer:
        "NTP (Network Time Protocol) is used to synchronize clocks on a network and uses default port 123.",
    },
    {
      section: "Application Layer Protocols",
      question: "What is RDP and its default port?",
      answer:
        "RDP (Remote Desktop Protocol) is used for remote access with a graphical user interface and uses default port 3389.",
    },
    {
      section: "Application Layer Protocols",
      question: "What is SSH and its default port?",
      answer:
        "SSH (Secure Shell) is a protocol for secure remote device access, encrypting data and requiring authentication, using default port 22.",
    },
    {
      section: "Application Layer Protocols",
      question:
        "Which protocol is the predecessor to SSH and what port does it use?",
      answer: "Telnet is the predecessor to SSH and uses default port 23.",
    },
    {
      section: "Protocol Layers",
      question:
        "Which OSI layer do FTP, SFTP, SMTP, POP3, IMAP, NTP, RDP, and SSH operate at?",
      answer:
        "These protocols operate at the application layer of the OSI model.",
    },
    {
      section: "Protocol Layers",
      question: "Which protocols operate at the network layer?",
      answer: "IPv4 and IPv6 operate at the network layer.",
    },
    {
      section: "Protocol Layers",
      question: "Which protocol operates at the data link layer?",
      answer:
        "ARP (Address Resolution Protocol) operates at the data link layer.",
    },
    {
      section: "LAN Configuration",
      question: "What cable is used to access a switch's management console?",
      answer:
        "A console cable connects a computer to a switch to access its management console.",
    },
    {
      section: "LAN Configuration",
      question: "What must be configured on endpoints in a LAN?",
      answer:
        "Endpoints must have their IP addresses and subnet masks configured according to network requirements.",
    },
    {
      section: "LAN Configuration",
      question: "How can switch settings be assigned?",
      answer:
        "Switch settings can be manually assigned using the command line interface (CLI) or graphical user interface (GUI) of the switch’s management console.",
    },
    {
      section: "LAN Configuration",
      question: "What must be set on a switch for it to pass traffic in a LAN?",
      answer:
        "The switch's access password, IP address, and subnet mask must be set for it to pass traffic in a LAN.",
    },
    {
      section: "LAN Security",
      question: "How does statically setting an IP address help security?",
      answer:
        "Statically setting an IP address reduces unexpected conflicts or changes, ensuring higher availability for devices needing consistent service.",
    },
    {
      section: "LAN Security",
      question:
        "How does grouping devices into VLANs help security and performance?",
      answer:
        "Grouping devices into VLANs based on traffic patterns increases network performance and security by segmenting traffic and limiting broadcast domains.",
    },
    {
      section: "LAN Security",
      question:
        "Why should default login credentials be changed on network devices?",
      answer:
        "Changing default login credentials, requiring strong passwords, and limiting administrative privileges prevents unauthorized access to the network and its configurations.",
    },
    {
      section: "LAN Security",
      question:
        "How does configuring port security on a switch improve security?",
      answer:
        "Configuring port security on a switch meets network requirements and minimizes the risk of external access to data.",
    },
    {
      section: "LAN Security",
      question: "What is recommended for wireless network security?",
      answer:
        "Configuring wireless networks to use the highest level of encryption enabled by the device increases security.",
    },
    {
      section: "LAN Security",
      question: "Why is updating all devices important for network security?",
      answer:
        "Updating all devices (firmware, OS, applications) increases performance and security by including fixes and patches for known vulnerabilities.",
    },
    {
      section: "LAN Troubleshooting",
      question:
        "What are the general steps in the network troubleshooting process?",
      answer:
        "The steps are: identify the problem, establish a theory of probable causes, test the theory, establish a plan of action, verify the solution, implement preventative measures, and document findings.",
    },
    {
      section: "LAN Troubleshooting",
      question: "What is the purpose of the ping utility?",
      answer:
        "ping uses ICMP to test host-to-host connectivity and helps isolate where a problem might be by showing which hosts can/cannot communicate.",
    },
    {
      section: "LAN Troubleshooting",
      question:
        "What hardware issues can cause connectivity loss and how can they be addressed?",
      answer:
        "Disconnected or faulty network hardware (cables, NICs, devices) can cause connectivity loss; tools like cable certifiers and replacing hardware can help fix these issues.",
    },
    {
      section: "LAN Troubleshooting",
      question:
        "What configuration issues can cause connection problems in a LAN?",
      answer:
        "Incorrect IP addresses, subnet masks, and other configuration settings can cause connection problems; checking and fixing these settings can restore connectivity.",
    },
  ],
  "Unit 4: Advanced LAN Topics": [
    {
      section: "IPv4 Addressing",
      question: "What does an IPv4 address consist of?",
      answer:
        "An IPv4 address consists of 32 bits, divided into network bits and host bits.",
    },
    {
      section: "IPv4 Addressing",
      question: "What is the purpose of a subnet mask?",
      answer:
        "A subnet mask determines which bits of an IPv4 address are network bits and which are host bits.",
    },
    {
      section: "IPv4 Addressing",
      question: "How is a subnet mask represented?",
      answer:
        "A subnet mask is 32 bits and can be written as four period-separated decimal numbers or in CIDR notation (e.g., /21).",
    },
    {
      section: "IPv4 Addressing",
      question: "What do the 1s and 0s in a subnet mask represent?",
      answer:
        "The 1s correspond to the network bits, and the 0s correspond to the host bits in the IPv4 address.",
    },
    {
      section: "IPv4 Addressing",
      question: "When do two IPv4 addresses belong to the same network?",
      answer:
        "They belong to the same network when their network bits match and they use the same subnet mask.",
    },
    {
      section: "IPv4 Addressing",
      question:
        "What is the network address and broadcast address on a network?",
      answer:
        "The first IP address is the network address, and the last IP address is the broadcast address.",
    },
    {
      section: "IPv4 Addressing",
      question:
        "What happens if two hosts have different network bits but the same subnet mask?",
      answer:
        "They are on different networks and require a router to communicate.",
    },
    {
      section: "IPv4 Addressing",
      question: "What must every IPv4 address be paired with?",
      answer:
        "Every IPv4 address must be paired with a subnet mask to determine the network and host portions.",
    },
    {
      section: "IPv4 Addressing",
      question: "What is CIDR notation?",
      answer:
        "CIDR notation is a compact representation of an IP address and its network mask, written as a slash and the number of 1 bits in the mask (e.g., 192.168.0.0/24).",
    },
    {
      section: "IPv4 Addressing",
      question:
        "How are MAC addresses, IPv4 addresses, and subnet masks used to direct LAN traffic?",
      answer:
        "Hosts compare their IPv4 address and subnet mask with the destination's. If on the same network, data is sent directly; if not, it goes to the router. MAC addresses are used for delivery within the LAN.",
    },
    {
      section: "IPv4 Addressing",
      question:
        "What does a host do if it does not know the MAC address of the destination?",
      answer:
        "It sends an ARP request to find the MAC address associated with the target IPv4 address.",
    },
    {
      section: "IPv4 Addressing",
      question: "What is an ARP table?",
      answer:
        "An ARP table stores known MAC address and IPv4 address pairings for quick reference.",
    },
    {
      section: "IPv4 Addressing",
      question: "What are public and private IPv4 addresses?",
      answer:
        "Public addresses are used externally on the Internet, while private addresses are used only within a LAN and are dropped by routers on the Internet.",
    },
    {
      section: "IPv4 Addressing",
      question: "What is NAT and why is it used?",
      answer:
        "NAT (Network Address Translation) allows a network to use internal private addresses while sharing one external public IP address, conserving public IPs.",
    },
    {
      section: "IPv4 Addressing",
      question: "What are the ranges of private IPv4 addresses?",
      answer:
        "10.0.0.0 to 10.255.255.255; 172.16.0.0 to 172.31.255.255; 192.168.0.0 to 192.168.255.255.",
    },
    {
      section: "Routing",
      question: "What is the function of a router?",
      answer:
        "A router connects and manages traffic among LANs using IP addresses and operates at Layer 3 of the OSI model.",
    },
    {
      section: "Routing",
      question: "How does a router determine where to send data?",
      answer:
        "It uses a routing table to match the destination IP address with the correct interface or next hop.",
    },
    {
      section: "Routing",
      question: "What information does a routing table entry contain?",
      answer:
        "Destination network address and subnet mask, next hop address, associated interface, and metric (cost).",
    },
    {
      section: "Routing",
      question:
        "What happens if multiple next hops are available for a destination?",
      answer: "The router chooses the next hop with the lowest metric.",
    },
    {
      section: "Routing",
      question:
        "What is the process when a router forwards data to another network?",
      answer:
        "The router de-encapsulates the frame and re-encapsulates it with updated Layer 2 information before forwarding.",
    },
    {
      section: "Routing",
      question: "How do you configure a router for multiple LANs?",
      answer:
        "Physically connect each LAN to the router, configure the router's password, IP address, subnet mask, and interface info, and ensure routing table entries for each LAN.",
    },
    {
      section: "Routing",
      question:
        "What command is commonly used to review and modify routing tables?",
      answer: "The 'route' command.",
    },
    {
      section: "Routing",
      question: "How does data travel between devices on different networks?",
      answer:
        "Data goes through one or more routers to reach the destination LAN, then through switches to the destination host.",
    },
    {
      section: "Routing",
      question: "What tools can show the path of a packet across networks?",
      answer: "traceroute (Mac/Linux) and tracert (Windows).",
    },
    {
      section: "Subnetting",
      question: "Why is subnetting used in computer networks?",
      answer:
        "Subnetting splits a large network into smaller subnets, improving performance and efficient IP address allocation.",
    },
    {
      section: "Subnetting",
      question: "What is classful addressing and why is it rarely used now?",
      answer:
        "Classful addressing divided IPv4 into fixed classes (A, B, C), leading to inefficient use of IP addresses. It has been replaced by classless addressing.",
    },
    {
      section: "Subnetting",
      question: "What is CIDR and how does it relate to subnetting?",
      answer:
        "CIDR (Classless Inter-Domain Routing) allows custom subnet masks, enabling flexible subnetting and efficient IP address use.",
    },
    {
      section: "Subnetting",
      question: "What is VLSM and why is it useful?",
      answer:
        "VLSM (Variable Length Subnet Mask) allows subnets of different sizes, optimizing IP address space usage.",
    },
    {
      section: "Subnetting",
      question: "How do you calculate the number of hosts in a subnet?",
      answer:
        "Use the formula 2^(number of host bits) - 2 (subtracting network and broadcast addresses).",
    },
    {
      section: "Subnetting",
      question: "How do you determine the number of subnets?",
      answer:
        "The number of subnets is 2^(number of bits allocated for subnets).",
    },
    {
      section: "Subnetting",
      question: "What is the goal when choosing a subnet size?",
      answer:
        "Choose the smallest subnet that meets the required number of hosts.",
    },
    {
      section: "Wireless Networks",
      question: "Why might a network have both wired and wireless segments?",
      answer:
        "Wired networks provide speed, reliability, and security; wireless networks offer convenience and mobility. Using both balances user needs and security.",
    },
    {
      section: "Wireless Networks",
      question: "What are the trade-offs between wired and wireless networks?",
      answer:
        "Wired: more secure, stable, fast; Wireless: more convenient, mobile, easier to set up.",
    },
    {
      section: "Wireless Networks",
      question: "How does encryption impact wireless network security?",
      answer:
        "Encryption (WEP, WPA, WPA2, WPA3) protects data in transit; stronger standards like WPA2 and WPA3 are more secure.",
    },
    {
      section: "Wireless Networks",
      question: "Why should default settings be changed on wireless devices?",
      answer:
        "Changing default credentials and using unique SSIDs and strong authentication prevents unauthorized access.",
    },
    {
      section: "Network Troubleshooting",
      question: "What tools help diagnose power-related network issues?",
      answer:
        "Power quality analyzers and uninterruptible power supplies (UPS) help monitor and stabilize power.",
    },
    {
      section: "Network Troubleshooting",
      question: "How can signal interference be identified?",
      answer: "Spectrum analyzers are used to detect interference sources.",
    },
    {
      section: "Network Troubleshooting",
      question: "What tools can identify network congestion?",
      answer:
        "Packet analysis tools, SNMP monitoring, and flow analyzers identify congestion sources.",
    },
    {
      section: "Network Troubleshooting",
      question: "How can IP address misconfigurations be resolved?",
      answer:
        "Check and correct DHCP, server connections, and DNS settings on devices and hosts.",
    },
    {
      section: "Network Troubleshooting",
      question: "How can application software issues affect the network?",
      answer:
        "Software issues can degrade performance; ensure compatibility, correct versions, and proper configurations.",
    },
  ],
  "Unit 5: Security Controls": [
    {
      section: "Introduction to Security Controls",
      question: "What are security controls?",
      answer:
        "Measures implemented to protect the confidentiality, integrity, and availability of data used by an organization.",
    },
    {
      section: "Introduction to Security Controls",
      question: "What are technical controls?",
      answer:
        "Security controls implemented using computer hardware and software.",
    },
    {
      section: "Introduction to Security Controls",
      question: "What are administrative controls?",
      answer:
        "Security controls implemented using policies and procedures, including user education.",
    },
    {
      section: "Introduction to Security Controls",
      question: "What are physical controls?",
      answer:
        "Security controls implemented to manage physical access to computing systems and networks.",
    },
    {
      section: "Introduction to Security Controls",
      question: "What functions do security controls serve?",
      answer:
        "They serve preventative, detective, and corrective functions to protect an organization.",
    },
    {
      section: "Introduction to Security Controls",
      question: "What is the purpose of preventative controls?",
      answer: "To stop attacks from happening.",
    },
    {
      section: "Introduction to Security Controls",
      question: "What is the purpose of detective controls?",
      answer: "To detect when attacks have occurred.",
    },
    {
      section: "Introduction to Security Controls",
      question: "What is the purpose of corrective controls?",
      answer:
        "To address the impact of a security incident after it has occurred.",
    },
    {
      section: "Introduction to Security Controls",
      question: "What are the main areas security controls protect?",
      answer:
        "Perimeter security, network security, host or endpoint security, application security, and data security.",
    },

    {
      section: "Physical and Administrative Controls",
      question: "How do physical deterrents protect networks?",
      answer:
        "By using fencing, cameras, and security guards to deter adversaries from physically accessing the network.",
    },
    {
      section: "Physical and Administrative Controls",
      question: "How do locks protect network devices?",
      answer:
        "Locks on doors, server cabinets, and computers prevent unauthorized access or theft of network devices.",
    },
    {
      section: "Physical and Administrative Controls",
      question: "How do card readers enhance security?",
      answer:
        "Card readers ensure only authorized personnel can access areas housing sensitive data.",
    },
    {
      section: "Physical and Administrative Controls",
      question: "How does security awareness training help protect networks?",
      answer:
        "It teaches users to identify and report suspicious activities, preventing compromise of the network and data.",
    },
    {
      section: "Physical and Administrative Controls",
      question: "What is the role of security policies and procedures?",
      answer:
        "They provide a structured approach to security by outlining principles (policies) and implementation instructions (procedures).",
    },

    {
      section: "Technical Controls: Firewalls",
      question: "What is a firewall?",
      answer:
        "A device or software that admits or denies traffic entry into a network or host based on defined criteria.",
    },
    {
      section: "Technical Controls: Firewalls",
      question:
        "What is the difference between a host-based and a network-based firewall?",
      answer:
        "A host-based firewall protects a single device, while a network-based firewall protects an entire network.",
    },
    {
      section: "Technical Controls: Firewalls",
      question: "How does a stateless firewall filter traffic?",
      answer:
        "It filters traffic based on information in packet headers such as IP addresses, ports, and protocols.",
    },
    {
      section: "Technical Controls: Firewalls",
      question: "How does a stateful firewall filter traffic?",
      answer: "It filters traffic based on the state of active connections.",
    },
    {
      section: "Technical Controls: Firewalls",
      question: "What is a next-generation firewall (NGFW)?",
      answer:
        "A firewall with capabilities of both stateless and stateful firewalls plus advanced features like intrusion prevention and deep packet inspection.",
    },
    {
      section: "Technical Controls: Firewalls",
      question: "What are access control lists (ACLs)?",
      answer:
        "Rules set by administrators that firewalls use to permit or deny inbound and outbound traffic.",
    },
    {
      section: "Technical Controls: Firewalls",
      question: "How are ACLs checked by a firewall?",
      answer:
        "ACLs are checked in order (typically top to bottom), and the first matching rule is executed.",
    },
    {
      section: "Technical Controls: Firewalls",
      question: "What does a typical ACL specify?",
      answer:
        "The direction of traffic, filtering criteria (IP addresses, port, service, or application), and the action (permit or deny).",
    },
    {
      section: "Technical Controls: Firewalls",
      question: "What is an allow list?",
      answer:
        "A list that grants permission only to entities listed; anything not listed is implicitly denied access.",
    },
    {
      section: "Technical Controls: Firewalls",
      question: "What is a deny list?",
      answer:
        "A list that explicitly denies access to entities listed; anything not on the list is implicitly allowed access.",
    },
    {
      section: "Technical Controls: Firewalls",
      question: "How do allow lists and deny lists differ in effect?",
      answer:
        "Allow lists result in fewer entities accessing a resource, while deny lists result in more entities accessing a resource.",
    },

    {
      section: "Technical Controls: Network Segmentation",
      question: "What is network segmentation?",
      answer:
        "The process of dividing a network into smaller, isolated segments or subnets.",
    },
    {
      section: "Technical Controls: Network Segmentation",
      question: "How does segmentation improve communication speed?",
      answer: "By isolating traffic and reducing network congestion.",
    },
    {
      section: "Technical Controls: Network Segmentation",
      question: "How does segmentation prevent lateral movement of attacks?",
      answer:
        "It isolates subnets, preventing attacks in one subnet from spreading to others.",
    },
    {
      section: "Technical Controls: Network Segmentation",
      question: "How does segmentation allow for different security policies?",
      answer:
        "Different segments can have different security policies and controls, creating higher and lower security zones.",
    },
    {
      section: "Technical Controls: Network Segmentation",
      question: "What is a DMZ (demilitarized zone)?",
      answer:
        "A screened subnet between public and internal networks, typically holding public-facing resources separate from internal networks.",
    },
    {
      section: "Technical Controls: Network Segmentation",
      question: "What are VLANs?",
      answer:
        "Virtual Local Area Networks that logically separate devices on the same physical switch; inter-VLAN traffic must go through a Layer 3 device.",
    },
    {
      section: "Technical Controls: Network Segmentation",
      question: "How does subnetting create network segments?",
      answer:
        "Subnetting uses IP addressing to create different subnets; inter-subnet traffic must go through a Layer 3 device.",
    },
    {
      section: "Technical Controls: Network Segmentation",
      question: "Can organizations combine segmentation techniques?",
      answer:
        "Yes, organizations may use a combination of segmentation techniques to fit their needs.",
    },

    {
      section: "Technical Controls: Network Monitoring",
      question: "What do IDS and IPS systems do?",
      answer:
        "They monitor and analyze network traffic to identify suspicious behavior or patterns indicating a security incident.",
    },
    {
      section: "Technical Controls: Network Monitoring",
      question: "How do IDS and IPS differ?",
      answer:
        "Both generate alerts, but an IPS also takes active measures to mitigate and respond to security incidents.",
    },
    {
      section: "Technical Controls: Network Monitoring",
      question: "What is the benefit of logging network events?",
      answer:
        "Logging provides useful information for investigating security incidents and helps uncover unusual activity through regular monitoring.",
    },
  ],

  "Unit 4b": [
    {
      section: "MAC, IPv4, and Subnet Masks",
      question: "What is the primary role of a MAC address in a LAN?",
      answer:
        "A MAC address uniquely identifies network interfaces for communications within the same local network segment.",
    },
    {
      section: "MAC, IPv4, and Subnet Masks",
      question: "What does a subnet mask do in a network?",
      answer:
        "A subnet mask divides an IP address into network and host portions, helping direct traffic within and between networks.",
    },
    {
      section: "MAC, IPv4, and Subnet Masks",
      question: "When must data pass through a router in a LAN?",
      answer:
        "When a host sends data to a device on a different network, the data must go through a router.",
    },
    {
      section: "MAC, IPv4, and Subnet Masks",
      question:
        "What device only sends data to the intended destination in a network?",
      answer:
        "A router only sends data to the intended destination, even as the network expands.",
    },
    {
      section: "MAC, IPv4, and Subnet Masks",
      question: "Why is a hub not suitable for segmenting networks?",
      answer:
        "A hub broadcasts messages to all devices, not just the intended recipient.",
    },
    {
      section: "MAC, IPv4, and Subnet Masks",
      question: "What is the function of a modem in a network?",
      answer:
        "A modem connects a network to the internet service provider, not for local network management.",
    },
    {
      section: "MAC, IPv4, and Subnet Masks",
      question: "What is the role of an access point?",
      answer:
        "An access point allows wireless devices to connect to a network but does not manage communication between networks.",
    },
    {
      section: "ARP and Address Resolution",
      question: "What does the ARP table display?",
      answer:
        "The ARP table shows the mapping of IP addresses to MAC addresses on the local network.",
    },
    {
      section: "ARP and Address Resolution",
      question: "Which command displays the ARP table in Linux?",
      answer: "The 'arp -a' command displays the ARP table in Linux.",
    },
    {
      section: "ARP and Address Resolution",
      question:
        "What happens if a MAC address is unknown for a destination IP?",
      answer:
        "The host sends an ARP request to learn the MAC address associated with the target IPv4 address.",
    },

    {
      section: "Public and Private IPv4 Addresses",
      question: "What is the purpose of NAT in a LAN?",
      answer:
        "NAT allows multiple devices on a LAN to share a single external public IP address.",
    },
    {
      section: "Public and Private IPv4 Addresses",
      question: "Does NAT assign unique public IPs to each device?",
      answer: "No, NAT allows all devices to share a single public IP address.",
    },
    {
      section: "Public and Private IPv4 Addresses",
      question: "What is a private IP address used for?",
      answer:
        "Private IP addresses are used within a LAN and are not routable on the public internet.",
    },
    {
      section: "Public and Private IPv4 Addresses",
      question: "How does NAT help conserve public IP addresses?",
      answer:
        "NAT translates private IPs to a single public IP, reducing the need for multiple public addresses.",
    },
    {
      section: "Public and Private IPv4 Addresses",
      question:
        "What is the external address seen by the internet when using NAT?",
      answer:
        "The single public IP address assigned by NAT is seen by the internet.",
    },
    {
      section: "Public and Private IPv4 Addresses",
      question: "Can NAT assign unique private IPs to each device?",
      answer:
        "No, NAT does not assign unique private IPs; it maps internal private IPs to a single public IP.",
    },
    {
      section: "Public and Private IPv4 Addresses",
      question:
        "Is a NAT device required for internet access from a LAN with private addresses?",
      answer:
        "Yes, NAT is required for devices with private IPs to access the internet.",
    },
    {
      section: "Public and Private IPv4 Addresses",
      question: "Does NAT improve network security?",
      answer:
        "NAT can provide a basic level of security by hiding internal IP addresses.",
    },
    {
      section: "Public and Private IPv4 Addresses",
      question: "What does NAT stand for?",
      answer: "Network Address Translation.",
    },
    {
      section: "Public and Private IPv4 Addresses",
      question: "What is the main benefit of using NAT?",
      answer: "It allows multiple devices to share a single public IP address.",
    },

    {
      section: "Routing Tables",
      question: "What key information does a routing table contain?",
      answer:
        "A routing table contains the destination network's address, subnet mask, next hop address, interface, and metric.",
    },
    {
      section: "Routing Tables",
      question: "What is the next hop in a routing table?",
      answer:
        "The next hop is the IP address of the device that is one step closer to the destination.",
    },
    {
      section: "Routing Tables",
      question: "Does a routing table show the previous hop?",
      answer: "No, it shows the next hop, not the previous hop.",
    },
    {
      section: "Routing Tables",
      question:
        "Is the physical address of the destination shown in a routing table?",
      answer:
        "No, the routing table shows the logical (IP) address, not the physical (MAC) address.",
    },
    {
      section: "Routing Tables",
      question: "Which command displays the routing table in Linux?",
      answer: "The 'route' command displays the routing table.",
    },
    {
      section: "Routing Tables",
      question: "What does the 'route' command do?",
      answer: "It reviews and modifies entries of a routing table.",
    },
    {
      section: "Routing Tables",
      question: "What is a routing metric?",
      answer:
        "A metric is a value that determines the cost or preference of a route.",
    },
    {
      section: "Routing Tables",
      question: "What does the 'default' entry in a routing table represent?",
      answer:
        "The default route used for traffic to destinations not in the routing table.",
    },
    {
      section: "Routing Tables",
      question: "Which interface is shown in the routing table output?",
      answer: "The physical interface associated with the next hop.",
    },
    {
      section: "Routing Tables",
      question: "What does the 'UG' flag mean in a routing table?",
      answer: "It indicates the route is up and is a gateway route.",
    },

    {
      section: "Data Travel in Networks",
      question: "How does data travel within the same LAN?",
      answer:
        "Data travels through one or more switches if the destination is on the same LAN.",
    },
    {
      section: "Data Travel in Networks",
      question: "When does data travel through a router?",
      answer:
        "Data travels through a router when the destination is outside the local LAN.",
    },
    {
      section: "Data Travel in Networks",
      question: "Do all data packets pass through a router?",
      answer:
        "No, only data destined for outside the LAN pass through a router.",
    },
    {
      section: "Data Travel in Networks",
      question: "What is the role of switches in a LAN?",
      answer: "Switches direct data within the same LAN.",
    },
    {
      section: "Data Travel in Networks",
      question: "What is the path for data to a host on a different LAN?",
      answer:
        "Data passes through one or more routers to reach a host on a different LAN.",
    },
    {
      section: "Data Travel in Networks",
      question: "Do routers handle data within the same LAN?",
      answer: "No, routers are used when data leaves the LAN.",
    },
    {
      section: "Data Travel in Networks",
      question: "What device connects different LANs?",
      answer: "A router connects different LANs.",
    },
    {
      section: "Data Travel in Networks",
      question: "Can switches route data between different networks?",
      answer: "No, switches operate within a single LAN.",
    },
    {
      section: "Data Travel in Networks",
      question: "What happens when data is sent to a device on the same LAN?",
      answer: "It is delivered via switches without leaving the LAN.",
    },
    {
      section: "Data Travel in Networks",
      question: "What is the main function of a router in a network?",
      answer: "To forward data between different networks.",
    },

    {
      section: "Subnetting and IPv4 Classes",
      question: "What subnet mask is assigned to Class A addresses?",
      answer: "255.0.0.0",
    },
    {
      section: "Subnetting and IPv4 Classes",
      question: "What subnet mask is assigned to Class B addresses?",
      answer: "255.255.0.0",
    },
    {
      section: "Subnetting and IPv4 Classes",
      question: "What subnet mask is assigned to Class C addresses?",
      answer: "255.255.255.0",
    },
    {
      section: "Subnetting and IPv4 Classes",
      question:
        "Which class does 172.168.0.101 with subnet mask 255.255.0.0 belong to?",
      answer: "Class B",
    },
    {
      section: "Subnetting and IPv4 Classes",
      question: "What is the purpose of subnetting?",
      answer: "Subnetting divides a network into smaller, manageable segments.",
    },
    {
      section: "Subnetting and IPv4 Classes",
      question: "What is VLSM?",
      answer:
        "Variable Length Subnet Masking allows subnets of different sizes within the same network.",
    },
    {
      section: "Subnetting and IPv4 Classes",
      question: "How many usable hosts does a /27 subnet provide?",
      answer: "A /27 subnet provides 30 usable host addresses.",
    },
    {
      section: "Subnetting and IPv4 Classes",
      question:
        "What is the smallest CIDR notation for a subnet needing 22 hosts?",
      answer: "/27 (30 usable addresses)",
    },
    {
      section: "Subnetting and IPv4 Classes",
      question:
        "What is the smallest CIDR notation for a subnet needing 55 hosts?",
      answer: "/26 (62 usable addresses)",
    },
    {
      section: "Subnetting and IPv4 Classes",
      question: "How do you calculate the number of usable IPs in a subnet?",
      answer:
        "Subtract 2 from the total IPs (network and broadcast addresses are not usable).",
    },

    {
      section: "Wireless Security",
      question: "Which encryption standard is most secure for Wi-Fi?",
      answer: "WPA3 is currently the most secure standard.",
    },
    {
      section: "Wireless Security",
      question: "Why should WEP not be used for wireless security?",
      answer: "WEP is easily broken and not secure.",
    },
    {
      section: "Wireless Security",
      question: "Which routers should be chosen for optimal wireless security?",
      answer: "Routers supporting WPA3 and WPA2 should be chosen.",
    },
    {
      section: "Wireless Security",
      question: "Does WPA2 provide better security than WPA?",
      answer: "Yes, WPA2 is more secure than WPA.",
    },
    {
      section: "Wireless Security",
      question: "What is the main benefit of changing default router settings?",
      answer:
        "It improves network security by reducing vulnerability to attacks.",
    },
    {
      section: "Wireless Security",
      question: "Should you use routers that only support WEP?",
      answer: "No, routers supporting only WEP are not secure.",
    },
    {
      section: "Wireless Security",
      question: "What is the benefit of using WPA3 over WPA2?",
      answer: "WPA3 provides enhanced security features over WPA2.",
    },
    {
      section: "Wireless Security",
      question: "Is it sufficient to use WPA for most networks today?",
      answer: "No, WPA2 or WPA3 should be used for better security.",
    },
    {
      section: "Wireless Security",
      question: "What does WPA stand for?",
      answer: "Wi-Fi Protected Access.",
    },
    {
      section: "Wireless Security",
      question: "What is the risk of using default router passwords?",
      answer: "They can be easily guessed, compromising network security.",
    },
  ],
  Stoichiometry: [
    {
      section: "12.1 Avogadro’s Number and the Mole",
      question: "What is Avogadro’s number and what does it represent?",
      answer:
        "Avogadro’s number is 6.02 x 10^23. It represents the number of entities (atoms, molecules, ions, etc.) in one mole of a substance.",
    },
    {
      section: "12.1 Avogadro’s Number and the Mole",
      question: "What is the definition of a mole in chemistry?",
      answer:
        "A mole is the amount of a substance that contains as many entities as there are atoms in 12 grams of carbon-12, which is 6.02 x 10^23 entities.",
    },
    {
      section: "12.2 Molar Mass",
      question: "What is molar mass?",
      answer:
        "Molar mass is the mass in grams of one mole of a substance, with units of g/mol. It is numerically equal to the atomic or molecular mass in amu, but in grams per mole.",
    },
    {
      section: "12.2 Molar Mass",
      question: "How do you calculate the molar mass of a compound?",
      answer:
        "Add up the atomic masses (from the periodic table) of all atoms in the compound’s formula.",
    },
    {
      section: "12.2 Molar Mass",
      question: "What is the molar mass of Cl2?",
      answer: "70.90 g/mol (2 x 35.45 g/mol for each Cl atom).",
    },
    {
      section: "12.2 Molar Mass",
      question: "What is the molar mass of H2O?",
      answer: "18.02 g/mol [(2 x 1.01) + 16.00].",
    },
    {
      section: "12.3 Mole Calculations",
      question: "How do you convert from moles to particles?",
      answer:
        "Multiply the number of moles by Avogadro’s number (6.02 x 10^23 entities/mol).",
    },
    {
      section: "12.3 Mole Calculations",
      question: "How do you convert from particles to moles?",
      answer:
        "Divide the number of particles by Avogadro’s number (6.02 x 10^23 entities/mol).",
    },
    {
      section: "12.3 Mole Calculations",
      question: "How do you convert from grams to moles?",
      answer:
        "Divide the mass in grams by the molar mass (g/mol) of the substance.",
    },
    {
      section: "12.3 Mole Calculations",
      question: "How do you convert from moles to grams?",
      answer:
        "Multiply the number of moles by the molar mass (g/mol) of the substance.",
    },
    {
      section: "12.4 Molar Volume",
      question: "What is the molar volume of a gas at STP?",
      answer:
        "22.4 L per mole at standard temperature and pressure (STP: 0°C, 1 atm).",
    },
    {
      section: "12.4 Molar Volume",
      question: "What is the formula for gas density at STP?",
      answer: "Density = Molar Mass / Molar Volume (g/L at STP).",
    },
    {
      section: "12.5 Percent Composition",
      question:
        "How do you calculate percent composition of an element in a compound?",
      answer:
        "Divide the total mass of the element in one mole of the compound by the molar mass of the compound, then multiply by 100%.",
    },
    {
      section: "12.5 Percent Composition",
      question: "What is the percent composition of H in H2O?",
      answer: "11.2% H [(2.02 g H / 18.02 g H2O) x 100].",
    },
    {
      section: "12.5 Percent Composition",
      question: "What is the percent composition of O in H2O?",
      answer: "88.79% O [(16.00 g O / 18.02 g H2O) x 100].",
    },
    {
      section: "13.1 Mole Ratio",
      question: "What is a mole ratio?",
      answer:
        "A mole ratio is a ratio between the amounts in moles of any two compounds involved in a chemical reaction, based on the coefficients in the balanced equation.",
    },
    {
      section: "13.1 Mole Ratio",
      question: "How do you use mole ratios to solve stoichiometry problems?",
      answer:
        "Use the coefficients from the balanced equation to set up conversion factors between moles of different substances.",
    },
    {
      section: "13.2 Mass-Mass Stoichiometry",
      question:
        "What are the steps for solving mass-mass stoichiometry problems?",
      answer:
        "1) Convert grams of given to moles using molar mass. 2) Use mole ratio to convert to moles of unknown. 3) Convert moles of unknown to grams using its molar mass.",
    },
    {
      section: "13.2 Mass-Mass Stoichiometry",
      question:
        "What is the answer to: Calculate the mass of H2 required to react with 8.75 g O2 (O2 + 2 H2 → 2 H2O)?",
      answer: "1.10 g H2.",
    },
    {
      section: "13.3 Mass-Volume Stoichiometry",
      question: "What is Avogadro's molar volume for gases at STP?",
      answer: "22.4 L/mol.",
    },
    {
      section: "13.3 Mass-Volume Stoichiometry",
      question: "What are the steps for mass-volume stoichiometry problems?",
      answer:
        "1) Convert grams or liters of given to moles. 2) Use mole ratio to get moles of unknown. 3) Convert moles of unknown to grams or liters as needed.",
    },
    {
      section: "13.3 Mass-Volume Stoichiometry",
      question:
        "How many liters of O2 are needed to react with 0.234 g SO2 at STP (2 SO2 + O2 → 2 SO3)?",
      answer: "0.0409 L O2.",
    },
    {
      section: "13.4 Volume-Volume Stoichiometry",
      question: "How do you solve volume-volume stoichiometry problems at STP?",
      answer:
        "If both reactant and product are gases at STP, use the mole ratio directly to convert between their volumes.",
    },
    {
      section: "13.4 Volume-Volume Stoichiometry",
      question:
        "How many liters of O2 are needed to produce 36.5 L of SO3 at STP (2 SO2 + O2 → 2 SO3)?",
      answer: "18.3 L O2.",
    },
    {
      section: "Conversion Chart",
      question:
        "What is the general sequence of conversions in stoichiometry as shown in the chart?",
      answer:
        "Mass of A ⇄ Moles of A ⇄ Moles of B ⇄ (Mass, Volume, or Particles of B), using molar mass, mole ratios, molar volume (for gases), and Avogadro’s number as conversion factors.",
    },
  ],

  "Polyatomic Ions": [
    {
      section: "Polyatomic Ions",
      question: "ClO<sup>1-</sup>",
      answer: "Hypochlorite",
    },
    {
      section: "Polyatomic Ions",
      question: "Hypochlorite",
      answer: "ClO<sup>1-</sup>",
    },
    {
      section: "Polyatomic Ions",
      question: "ClO<sub>2</sub><sup>1-</sup>",
      answer: "Chlorite",
    },
    {
      section: "Polyatomic Ions",
      question: "Chlorite",
      answer: "ClO<sub>2</sub><sup>1-</sup>",
    },
    {
      section: "Polyatomic Ions",
      question: "ClO<sub>3</sub><sup>1-</sup>",
      answer: "Chlorate",
    },
    {
      section: "Polyatomic Ions",
      question: "Chlorate",
      answer: "ClO<sub>3</sub><sup>1-</sup>",
    },
    {
      section: "Polyatomic Ions",
      question: "ClO<sub>4</sub><sup>1-</sup>",
      answer: "Perchlorate",
    },
    {
      section: "Polyatomic Ions",
      question: "Perchlorate",
      answer: "ClO<sub>4</sub><sup>1-</sup>",
    },
    {
      section: "Polyatomic Ions",
      question: "MnO<sub>4</sub><sup>1-</sup>",
      answer: "Permanganate",
    },
    {
      section: "Polyatomic Ions",
      question: "Permanganate",
      answer: "MnO<sub>4</sub><sup>1-</sup>",
    },
    {
      section: "Polyatomic Ions",
      question: "SO<sub>3</sub><sup>2-</sup>",
      answer: "Sulfite",
    },
    {
      section: "Polyatomic Ions",
      question: "Sulfite",
      answer: "SO<sub>3</sub><sup>2-</sup>",
    },
    {
      section: "Polyatomic Ions",
      question: "PO<sub>4</sub><sup>3-</sup>",
      answer: "Phosphate",
    },
    {
      section: "Polyatomic Ions",
      question: "Phosphate",
      answer: "PO<sub>4</sub><sup>3-</sup>",
    },
    {
      section: "Polyatomic Ions",
      question: "HPO<sub>4</sub><sup>2-</sup>",
      answer: "Hydrogen Phosphate",
    },
    {
      section: "Polyatomic Ions",
      question: "Hydrogen Phosphate",
      answer: "HPO<sub>4</sub><sup>2-</sup>",
    },
    {
      section: "Polyatomic Ions",
      question: "H<sub>2</sub>PO<sub>4</sub><sup>1-</sup>",
      answer: "Dihydrogen Phosphate",
    },
    {
      section: "Polyatomic Ions",
      question: "Dihydrogen Phosphate",
      answer: "H<sub>2</sub>PO<sub>4</sub><sup>1-</sup>",
    },
    {
      section: "Polyatomic Ions",
      question: "NH<sub>4</sub><sup>1+</sup>",
      answer: "Ammonium",
    },
    {
      section: "Polyatomic Ions",
      question: "Ammonium",
      answer: "NH<sub>4</sub><sup>1+</sup>",
    },
    {
      section: "Polyatomic Ions",
      question: "HCO<sub>3</sub><sup>1-</sup> (2 names)",
      answer: "Hydrogen Carbonate\nBicarbonate",
    },
    {
      section: "Polyatomic Ions",
      question: "Hydrogen Carbonate\nBicarbonate",
      answer: "HCO<sub>3</sub><sup>1-</sup> (2 names)",
    },
    {
      section: "Polyatomic Ions",
      question: "CO<sub>3</sub><sup>2-</sup>",
      answer: "Carbonate",
    },
    {
      section: "Polyatomic Ions",
      question: "Carbonate",
      answer: "CO<sub>3</sub><sup>2-</sup>",
    },
    {
      section: "Polyatomic Ions",
      question: "OH<sup>1-</sup>",
      answer: "Hydroxide",
    },
    {
      section: "Polyatomic Ions",
      question: "Hydroxide",
      answer: "OH<sup>1-</sup>",
    },
    {
      section: "Polyatomic Ions",
      question: "NO<sub>2</sub><sup>1-</sup>",
      answer: "Nitrite",
    },
    {
      section: "Polyatomic Ions",
      question: "Nitrite",
      answer: "NO<sub>2</sub><sup>1-</sup>",
    },
    {
      section: "Polyatomic Ions",
      question: "NO<sub>3</sub><sup>1-</sup>",
      answer: "Nitrate",
    },
    {
      section: "Polyatomic Ions",
      question: "Nitrate",
      answer: "NO<sub>3</sub><sup>1-</sup>",
    },
    {
      section: "Polyatomic Ions",
      question: "CrO<sub>4</sub><sup>2-</sup>",
      answer: "Chromate",
    },
    {
      section: "Polyatomic Ions",
      question: "Chromate",
      answer: "CrO<sub>4</sub><sup>2-</sup>",
    },
    {
      section: "Polyatomic Ions",
      question: "Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>",
      answer: "Dichromate",
    },
    {
      section: "Polyatomic Ions",
      question: "Dichromate",
      answer: "Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>",
    },
    {
      section: "Polyatomic Ions",
      question: "HSO<sub>4</sub><sup>2-</sup> (2 names)",
      answer: "Hydrogen Sulfate\nBisulfate",
    },
    {
      section: "Polyatomic Ions",
      question: "Hydrogen Sulfate\nBisulfate",
      answer: "HSO<sub>4</sub><sup>2-</sup> (2 names)",
    },
    {
      section: "Polyatomic Ions",
      question: "CN<sup>1-</sup>",
      answer: "Cyanide",
    },
    {
      section: "Polyatomic Ions",
      question: "Cyanide",
      answer: "CN<sup>1-</sup>",
    },
    {
      section: "Polyatomic Ions",
      question: "O<sub>2</sub><sup>2-</sup>",
      answer: "Peroxide",
    },
    {
      section: "Polyatomic Ions",
      question: "Peroxide",
      answer: "O<sub>2</sub><sup>2-</sup>",
    },
  ],
  "war of 1812":[
  {
    section: "Adams-Onis Treaty",
    question: "What was the Adams-Onis Treaty of 1819?",
    answer: "Spain ceded Florida to the United States and gave up its claims to the Oregon Territory."
  },
  {
    section: "Battle of New Orleans",
    question: "What happened at the Battle of New Orleans on January 8, 1815?",
    answer: "Jackson led U.S. troops against the British after the Treaty of Ghent was signed, but news had not yet reached the U.S."
  },
  {
    section: "Hartford Convention",
    question: "What was the Hartford Convention?",
    answer: "A meeting of Federalists dissatisfied with the War of 1812, where they considered constitutional changes and secession. It damaged the Federalist Party."
  },
  {
    section: "Louisiana Purchase",
    question: "What was the Louisiana Purchase of 1803?",
    answer: "A land deal where the U.S. bought western territory from France for $15 million during Jefferson's presidency."
  },
  {
    section: "McCulloch v. Maryland",
    question: "What was the significance of McCulloch v. Maryland (1819)?",
    answer: "The Supreme Court confirmed national supremacy over state governments and reinforced federal power."
  },
  {
    section: "Missouri Compromise",
    question: "What was the Missouri Compromise of 1820?",
    answer: "It admitted Missouri as a slave state and Maine as a free state, and prohibited slavery north of the 36°30′ latitude line."
  },
  {
    section: "Treaty of Ghent",
    question: "What did the Treaty of Ghent accomplish?",
    answer: "It ended the War of 1812 and restored prewar conditions and territory."
  },
  {
    section: "USS Constitution (Old Ironsides)",
    question: "Why was the USS Constitution called 'Old Ironsides'?",
    answer: "It was a famous American frigate, larger and heavier than most British ships, and earned its nickname in battle."
  },
  {
    section: "War of 1812",
    question: "What caused the War of 1812 and what happened?",
    answer: "It was caused by British impressment of U.S. sailors, seizure of ships, and support for Native attacks. U.S. troops fought in Florida, and the British invaded and burned Washington, D.C."
  }
]
  "Civil War": [
    {
      "section": "Civil War",
      "question": "1st Battle of Bull Run",
      "answer": "Thomas \"Stonewall\" Jackson gets his nickname in this battle. The Confederacy gets an early victory and a boost of confidence in this battle."
    },
    {
      "section": "",
      "question": "Secede/Secession",
      "answer": "to withdraw from the United States. Caused by Lincoln's election to the presidency. South Carolina was 1st to go."
    },
    {
      "section": "",
      "question": "Anaconda Plan",
      "answer": "The North's strategy to win the war. Surround the South & squeeze it from all sides."
    },
    {
      "section": "",
      "question": "Battle of Gettysburg",
      "answer": "Bloodiest battle of the Civil War. Considered the turning point of the war, proved that Robert E. Lee was not unstoppable."
    },
    {
      "section": "",
      "question": "Firing on Fort Sumter",
      "answer": "Northern controlled fortress in Charleston S.C. It was where the first shots of the Civil War were fired."
    },
    {
      "section": "",
      "question": "Ulysses Grant",
      "answer": "Top Northern General, chosen by Lincoln to lead Union forces in the war.\nLee eventually surrendered to him."
    },
    {
      "section": "",
      "question": "Robert E. Lee",
      "answer": "Leader of the Confederate (Southern) army during the Civil War. Considered a gifted commander. One of the 3 men on Stone Mnt."
    },
    {
      "section": "",
      "question": "13th Amendment",
      "answer": "Added to the Constitution to officially end slavery, the root cause of the civil war."
    },
    {
      "section": "",
      "question": "Emancipation Proclamation",
      "answer": "A special order by President Lincoln on January 1st, 1863 declaring slaves in Confederate states were free"
    },
    {
      "section": "",
      "question": "Battle of Vicksburg",
      "answer": "Major Union victory won by Gen. Grant. Gave Union control of the Mississippi river & cut the Confederacy in two."
    },
    {
      "section": "",
      "question": "Abraham Lincoln",
      "answer": "President of the Union during the Civil War. He opposed the expansion of slavery. He thought slavery was immoral."
    },
    {
      "section": "",
      "question": "Jefferson Davis",
      "answer": "President of the Confederacy during the Civil War, one of the three men on Stone Mountain."
    },
    {
      "section": "",
      "question": "Gettysburg Address",
      "answer": "Two minute speech given by Abraham Lincoln at a memorial for Union soldiers that died during one of the most important battles of the war."
    },
    {
      "section": "",
      "question": "Appomattox Courthouse",
      "answer": "Place where Robert E. Lee surrendered to Ulysses Grant, ending the Civil War."
    },
    {
      "section": "",
      "question": "Battle of Atlanta/March to the Sea",
      "answer": "Total war. General Sherman and his men destroyed the city, a major transport center, & everything in their path."
    },
    {
      "section": "",
      "question": "Habeas Corpus---suspended",
      "answer": "A key Constitutional protection against unlawful imprisonment, Lincoln ignored it as part of his war-emergency powers."
    },
    {
      "section": "",
      "question": "William T. Sherman",
      "answer": "Union General who captured Atlanta & burned it to the ground, along with most of Ga. & S.C."
    },
    {
      "section": "",
      "question": "The Mississippi River",
      "answer": "Considered a very important resource to both sides during the Civil War; The Union gained control of it at the Battle of Vicksburg."
    },
    {
      "section": "",
      "question": "South Carolina",
      "answer": "First state to leave the union, place where 1st battle was fought, place that got punished the most by Sherman's Army."
    }
  ]

};
