var flashcards = {
  "Example": [
    {
      section: "Example Section",
      question: "What is 1+1?",
      answer: "2",
    },
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
  "Space": [
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
  "Math": [
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
  "Chemistry": [
    {
      section: "Element Names",
      question: "H",
      answer: "Hydrogen",
    },
    {
      section: "Element Symbols",
      question: "Hydrogen",
      answer: "H",
    },
    {
      section: "Element Names",
      question: "He",
      answer: "Helium",
    },
    {
      section: "Element Symbols",
      question: "Helium",
      answer: "He",
    },
    {
      section: "Element Names",
      question: "Li",
      answer: "Lithium",
    },
    {
      section: "Element Symbols",
      question: "Lithium",
      answer: "Li",
    },
    {
      section: "Element Names",
      question: "Be",
      answer: "Beryllium",
    },
    {
      section: "Element Symbols",
      question: "Beryllium",
      answer: "Be",
    },
    {
      section: "Element Names",
      question: "B",
      answer: "Boron",
    },
    {
      section: "Element Symbols",
      question: "Boron",
      answer: "B",
    },
    {
      section: "Element Names",
      question: "C",
      answer: "Carbon",
    },
    {
      section: "Element Symbols",
      question: "Carbon",
      answer: "C",
    },
    {
      section: "Element Names",
      question: "N",
      answer: "Nitrogen",
    },
    {
      section: "Element Symbols",
      question: "Nitrogen",
      answer: "N",
    },
    {
      section: "Element Names",
      question: "O",
      answer: "Oxygen",
    },
    {
      section: "Element Symbols",
      question: "Oxygen",
      answer: "O",
    },
    {
      section: "Element Names",
      question: "F",
      answer: "Fluorine",
    },
    {
      section: "Element Symbols",
      question: "Fluorine",
      answer: "F",
    },
    {
      section: "Element Names",
      question: "Ne",
      answer: "Neon",
    },
    {
      section: "Element Symbols",
      question: "Neon",
      answer: "Ne",
    },
    {
      section: "Element Names",
      question: "Na",
      answer: "Sodium",
    },
    {
      section: "Element Symbols",
      question: "Sodium",
      answer: "Na",
    },
    {
      section: "Element Names",
      question: "Mg",
      answer: "Magnesium",
    },
    {
      section: "Element Symbols",
      question: "Magnesium",
      answer: "Mg",
    },
    {
      section: "Element Names",
      question: "Al",
      answer: "Aluminum",
    },
    {
      section: "Element Symbols",
      question: "Aluminum",
      answer: "Al",
    },
    {
      section: "Element Names",
      question: "Si",
      answer: "Silicon",
    },
    {
      section: "Element Symbols",
      question: "Silicon",
      answer: "Si",
    },
    {
      section: "Element Names",
      question: "P",
      answer: "Phosphorus",
    },
    {
      section: "Element Symbols",
      question: "Phosphorus",
      answer: "P",
    },
    {
      section: "Element Names",
      question: "S",
      answer: "Sulfur",
    },
    {
      section: "Element Symbols",
      question: "Sulfur",
      answer: "S",
    },
    {
      section: "Element Names",
      question: "Cl",
      answer: "Chlorine",
    },
    {
      section: "Element Symbols",
      question: "Chlorine",
      answer: "Cl",
    },
    {
      section: "Element Names",
      question: "Ar",
      answer: "Argon",
    },
    {
      section: "Element Symbols",
      question: "Argon",
      answer: "Ar",
    },
    {
      section: "Element Names",
      question: "K",
      answer: "Potassium",
    },
    {
      section: "Element Symbols",
      question: "Potassium",
      answer: "K",
    },
    {
      section: "Element Names",
      question: "Ca",
      answer: "Calcium",
    },
    {
      section: "Element Symbols",
      question: "Calcium",
      answer: "Ca",
    },
    {
      section: "Element Names",
      question: "Ba",
      answer: "Barium",
    },
    {
      section: "Element Symbols",
      question: "Barium",
      answer: "Ba",
    },
    {
      section: "Element Names",
      question: "Co",
      answer: "Cobalt",
    },
    {
      section: "Element Symbols",
      question: "Cobalt",
      answer: "Co",
    },
    {
      section: "Element Names",
      question: "I",
      answer: "Iodine",
    },
    {
      section: "Element Symbols",
      question: "Iodine",
      answer: "I",
    },
    {
      section: "Element Names",
      question: "Cu",
      answer: "Copper",
    },
    {
      section: "Element Symbols",
      question: "Copper",
      answer: "Cu",
    },
    {
      section: "Element Names",
      question: "Fe",
      answer: "Iron",
    },
    {
      section: "Element Symbols",
      question: "Iron",
      answer: "Fe",
    },
    {
      section: "Element Names",
      question: "Pb",
      answer: "Lead",
    },
    {
      section: "Element Symbols",
      question: "Lead",
      answer: "Pb",
    },
    {
      section: "Element Names",
      question: "Hg",
      answer: "Mercury",
    },
    {
      section: "Element Symbols",
      question: "Mercury",
      answer: "Hg",
    },
    {
      section: "Element Names",
      question: "Ag",
      answer: "Silver",
    },
    {
      section: "Element Symbols",
      question: "Silver",
      answer: "Ag",
    },
    {
      section: "Element Names",
      question: "Au",
      answer: "Gold",
    },
    {
      section: "Element Symbols",
      question: "Gold",
      answer: "Au",
    },
    {
      section: "Element Names",
      question: "Zn",
      answer: "Zinc",
    },
    {
      section: "Element Symbols",
      question: "Zinc",
      answer: "Zn",
    },
    {
      section: "Element Names",
      question: "Sn",
      answer: "Tin",
    },
    {
      section: "Element Symbols",
      question: "Tin",
      answer: "Sn",
    },
    {
      section: "Element Names",
      question: "Ni",
      answer: "Nickel",
    },
    {
      section: "Element Symbols",
      question: "Nickel",
      answer: "Ni",
    },
    {
      section: "Element Names",
      question: "Br",
      answer: "Bromine",
    },
    {
      section: "Element Symbols",
      question: "Bromine",
      answer: "Br",
    },
    {
      section: "Element Names",
      question: "Cr",
      answer: "Chromium",
    },
    {
      section: "Element Symbols",
      question: "Chromium",
      answer: "Cr",
    },
    {
      section: "Element Names",
      question: "Mn",
      answer: "Manganese",
    },
    {
      section: "Element Symbols",
      question: "Manganese",
      answer: "Mn",
    },
    {
      section: "Element Names",
      question: "Cd",
      answer: "Cadmium",
    },
    {
      section: "Element Symbols",
      question: "Cadmium",
      answer: "Cd",
    },
  ],
  "Comptia(Multiple Choice)": [
    {
      section: "Basic Network Components",
      question:
        "Which of the following is a component that provides resources over a network?<br>1.) Client<br>2.) LAN<br>3.) Router<br>4.) Server",
      answer: "The correct answer is 4",
    },
    {
      section: "Dynamic NAT",
      question:
        "What NAT variation automatically assigns an inside global address to a device on the private network from a pool of available addresses?<br>1.) SNAT<br>2.) DNAT<br>3.) PAT<br>4.) GNAT",
      answer: "The correct answer is 2",
    },
    {
      section: "NAT Basics",
      question:
        "What NAT IP address is a public address that references an inside device?<br>1.) Inside local<br>2.) Inside global<br>3.) Outside local<br>4.) Outside global",
      answer: "The correct answer is 2",
    },
    {
      section: "Exterior Gateway Protocols (EGP)",
      question:
        "Which of the following routing protocols is an EGP?<br>1.) BGP<br>2.) IS-IS<br>3.) RIP<br>4.) OSPF",
      answer: "The correct answer is 1",
    },
    {
      section: "Preventing Routing Loops",
      question:
        "Which are features of distance-vector routing protocols that are used to prevent routing loops? (Choose all that apply).<br>1.) Reverse path forwarding (RPF) check<br>2.) Split horizon<br>3.) Poison reverse<br>4.) Rendezvous point",
      answer: "The correct answers are 2 and 3",
    },
    {
      section: "Believability of a Route",
      question:
        "What routing protocol characteristic indicates the believability of the routing protocol?<br>1.) Weight<br>2.) Metric<br>3.) Administrative distance<br>4.) SPF algorithm",
      answer: "The correct answer is 3",
    },
    {
      section: "Default Route",
      question:
        "What is the network address and subnet mask of a default route?<br>1.) 255.255.255.255/32<br>2.) 0.0.0.0/32<br>3.) 255.255.255.255/0<br>4.) 0.0.0.0/0",
      answer: "The correct answer is 4",
    },
    {
      section: "Destination IP Address",
      question:
        "When a PC on an Ethernet network attempts to communicate with a host on a different subnet, what destination IP address and destination MAC address are placed in the packet/frame header transmitted by the client PC?<br>1.) IP address of the default gateway and MAC address of the default gateway.<br>2.) IP address of the remote host and MAC address of the default gateway.<br>3.) IP address of the remote host and the MAC address of the remote host.<br>4.) IP address of the remote host and the MAC address of the local PC.",
      answer: "The correct answer is 2",
    },
    {
      section: "IPv6 Address Abbreviation",
      question:
        "Simplify the following IPv6 address: 0AA0:0123:4040:0000:0000:000:000A:100B<br>1.) AA0::123:404:A:100B<br>2.) AA::123:404:A:1B<br>3.) AA0:123:4040::A:100B<br>4.) 0AA0:0123:4040::0:000A:100BSection",
      answer: "The correct answer is 3",
    },
    {
      section: "Classful Masks",
      question:
        "A client with an IP address of 172.16.18.5/18 belongs to what network?<br>1.) 172.16.0.0/18<br>2.) 172.16.4.0/18<br>3.) 172.16.8.0/18<br>4.) 172.16.16.0/18",
      answer: "The correct answer is 1",
    },
    {
      section: "Network Subnetting",
      question:
        "Your company has been assigned the following network: 192.168.30.0/24. Come up with a subnet mask that will accommodate seven subnets while also accommodating the maximum number of hosts per subnet.<br>1.) /24<br>2.) /26<br>3.) /27<br>4.) /28",
      answer: "The correct answer is 3",
    },
    {
      section: "Prefix Notation",
      question:
        "What is the prefix notation for a subnet mask of 255.255.255.240?<br>1.) /20<br>2.) /24<br>3.) /28<br>4.) /29",
      answer: "The correct answer is 3",
    },
    {
      section: "IP Address Assignment",
      question:
        "Which of the following are dynamic methods for assigning IP addresses to networked devices?<br>1.) BOOTP<br>2.) APIPA<br>3.) Zeroconf<br>4.) DHCP",
      answer: "The correct answers are 1 and 4",
    },
    {
      section: "IP Address Classes",
      question:
        "What is the class of IP address 10.1.2.3?<br>1.) Class A<br>2.) Class B<br>3.) Class C<br>4.) Class D",
      answer: "The correct answer is 1",
    },
    {
      section: "Decimal To Binary Conversion",
      question:
        "What is the decimal representation for this binary number: 10110100?<br>1.) 114<br>2.) 190<br>3.) 172<br>4.) 180",
      answer: "The correct answer is 4",
    },
    {
      section: "Binary To Decimal Conversion",
      question:
        "What is the binary representation of the decimal number 117?<br>1.) 10110101<br>2.) 01110101<br>3.) 10110110<br>4.) 01101001",
      answer: "The correct answer is 2",
    },
    {
      section: "Network Authentication",
      question:
        "Which device on IEEE 802.1X is responsible for checking the credentials of a device seeking to gain access to the network?<br>1.) Supplicant<br>2.) Authentication server<br>3.) Access point<br>4.) Authenticator",
      answer: "The correct answer is 2",
    },
    {
      section: "Packet Sniffing Fundamentals",
      question:
        "You want to monitor traffic between two ports on a switch with a laptop running the Wireshark packet sniffing software connected to a third port. What feature on the switch would you enable to allow you to monitor the traffic between the other two ports?<br>1.) Port interception<br>2.) Port duplexing<br>3.) Port mirroring<br>4.) Port redirect",
      answer: "The correct answer is 3",
    },
    {
      section: "Power Over Ethernet Specifications",
      question:
        "What is the maximum amount of power a switch is allowed to provide over any one port as specified by the IEEE 802.3af standard for PoE?<br>1.) 7.7 W<br>2.) 15.4 W<br>3.) 26.4 W<br>4.) 32.4 W",
      answer: "The correct answer is 2",
    },
    {
      section: "Spanning Tree Protocol Basics",
      question:
        "On a network running STP, what is the port within each segment that is closest to the root bridge (in terms of cost) called?<br>1.) Root<br>2.) Designated<br>3.) Non-designated<br>4.) Non-root",
      answer: "The correct answer is 2",
    },
    {
      section: "VLAN Essentials",
      question:
        "Which are true about VLANs? (Choose all that apply.)<br>1.) A VLAN has a single broadcast domain.<br>2.) For traffic to pass between two VLANs, the traffic must be routed.<br>3.) Because a switch has a MAC address table, traffic does not need to be routed to pass between two VLANS.<br>4.) A VLAN has a single collision domain.",
      answer: "The correct answers are 1 and 2",
    },
    {
      section: "Ethernet Collision Detection and Handling",
      question:
        "When two devices simultaneously transmit data on an Ethernet network and a collision is detected, what happens?<br>1.) Each device compares the other device’s priority value (determined by IP address) with its own and the device with the highest priority attempts to resend its data first.<br>2.) Each device waits for a clear to send (CTS) sign from the switch before resending its data.<br>3.) Each device randomly picks a priority value and the device choosing the highest value resends its data first.<br>4.) Each device sets a random back off timer and the device will attempt to resend its data after its timer expires.",
      answer: "The correct answer is 4",
    },
    {
      section: "Ethernet Origins",
      question:
        "Which Ethernet implementation uses UTP?<br>1.) IEEE 802.3<br>2.) 10BASE5<br>3.) 10BASE2<br>4.) 10BASE-T",
      answer: "The correct answer is 4",
    },
    {
      section: "Proxy Server Benefits",
      question:
        "What are the possible benefits of a proxy server? (Choose all that apply).<br>1.) Load balancing<br>2.) Content filtering<br>3.) Data caching<br>4.) Security",
      answer: "The correct answers are 2, 3 and 4",
    },
    {
      section: "Specialized Network Devices",
      question:
        "Which device allows traffic to enter and exit a private corporate network?<br>1.) VPN Concentrator<br>2.) DHCP Server<br>3.) Firewall<br>4.) Proxy Server",
      answer: "The correct answer is 3",
    },
    {
      section: "Switch Broadcast Domains",
      question:
        "How many broadcast domains does a 12-port switch have?<br>1.) None<br>2.) One<br>3.) Two<br>4.) Twelve",
      answer: "The correct answer is 2",
    },
    {
      section: "Router Broadcast Domains",
      question:
        "How many broadcast domains does a 12-port router have?<br>1.) None<br>2.) One<br>3.) Two<br>4.) Twelve",
      answer: "The correct answer is 4",
    },
    {
      section: "Network Infrastructure Devices",
      question:
        "Which network infrastructure device primarily makes forwarding decisions based on MAC addresses?<br>1.) Router<br>2.) Switch<br>3.) Hub<br>4.) Multilayer switch",
      answer: "The correct answer is 2",
    },
    {
      section: "Environmental Considerations of Cabling",
      question:
        "Which type of cable would you choose for installation in a drop ceiling that is used as an open air return duct?<br>1.) Riser<br>2.) Plenum<br>3.) Multimode<br>4.) Twin-axial",
      answer: "The correct answer is 2",
    },
    {
      section: "UTP Cabling",
      question:
        "Which of the following categories of UTP cabling are suitable are 1000BASE-T networks? (Choose all that apply)<br>1.) Cat 5<br>2.) Cat 5e<br>3.) Cat 6<br>4.) Cat 6e",
      answer: "The correct answer is 2 and 3",
    },
    {
      section: "TCP and UDP Ports",
      question:
        "In which range is the TCP port number for the HTTP protocol located?<br>1.) Below 1024<br>2.) Between 1024 and 16,384<br>3.) Above 16,384",
      answer: "The correct answer is 1",
    },
    {
      section: "TCP/IP Stack",
      question:
        "Which of the following are the four layers of the TCP/IP stack?<br>1.) Network Interface, Internet, Session, Application<br>2.) Physical, Internet, Transport, Application<br>3.) Network Interface, Datalink, Presentation, Application<br>4.) Network Interface, Internet, Transport, Application",
      answer: "The correct answer is 4",
    },
    {
      section: "Windowing Flow Control Service",
      question:
        "Which best describes the windowing flow control service?<br>1.) A buffering technique where a chunk of memory is allocated to store segments when bandwidth is not sufficient to transmit all of the segments.<br>2.) An application layer service that allows connected clients to remotely run Microsoft Windows.<br>3.) A network layer protocol that restricts data delivery based on IP address.<br>4.) A transport layer flow control service that exponentially increases the number of segments transmitted for each successfully acknowledged transmission reception.",
      answer: "The correct answer is 4",
    },
    {
      section: "Connectionless Transport Layer Protocol",
      question:
        "Which of the following protocols is a connectionless transport layer protocol?<br>1.) IP<br>2.) UDP<br>3.) TCP<br>4.) 802.11g",
      answer: "The correct answer is 2",
    },
    {
      section: "Bandwidth Usage",
      question:
        "Which approach to bandwidth usage on a network utilizes all available frequencies on a medium for data transmission?<br>1.) Broadband<br>2.) Time-division multiplexing<br>3.) Baseband<br>4.) Simplex",
      answer: "The correct answer is 3",
    },
    {
      section: "OSI Model",
      question:
        "Which layer of the OSI reference model is responsible for providing email services?<br>1.) Physical layer<br>2.) Transport layer<br>3.) Application layer<br>4.) Network layer",
      answer: "The correct answer is 3",
    },
    {
      section: "Resource Sharing Features",
      question:
        "What are some of the advantages of a peer-to-peer network when compared with a client-server network?<br>1.) Less Expensive<br>2.) Simplified administration<br>3.) More scalable<br>4.) Better performance",
      answer: "The correct answer is 1",
    },
    {
      section: "Resource Location",
      question:
        "A peer-to-peer network requires that all connected computers be running the same OS in order to share resources?<br>1.) True<br>2.) False",
      answer: "2",
    },
    {
      section: "Network Topology Features",
      question:
        "Which two statements are true with regards to a Hub-and-Spoke topology?<br>1.) Lower cost and high redundancy<br>2.) Lower cost and easy to add remote sites<br>3.) Higher cost and lower redundancy<br>4.) Lower cost and remote sites directly connected",
      answer: "The correct answer is 2",
    },
    {
      section: "Network Topology",
      question:
        "Which network topology offers both an optimal route between selected sites as well as avoiding the expense of interconnecting every site to every other site?<br>1.) Full mesh<br>2.) Hub and spoke<br>3.) Bus<br>4.) Partial mesh",
      answer: "The correct answer is 4",
    },
    {
      section: "Network Geography Features",
      question:
        "A network that connects a wireless headset to a PC using Bluetooth is considered what type of network?<br>1.) WAN<br>2.) CAN<br>3.) MAN<br>4.) PAN",
      answer: "The correct answer is 4",
    },
    {
      section: "Network Geography",
      question:
        "Which of the following network geographies would you expect to see deployed to connect the LANs of multiple office buildings within an industrial park?<br>1.) MAN<br>2.) PAN<br>3.) CAN<br>4.) WAN",
      answer: "The correct answer is 3",
    },
    {
      section: "Features of Network Components",
      question:
        "Which of the network components below is purely physical (has no intelligence in the form of an embedded processing)?<br>1.) Hub<br>2.) Router<br>3.) Switch<br>4.) Server",
      answer: "The correct answer is 1",
    },
    {
      section: "Multicast Protocols",
      question:
        "What multicast protocol is used between clients and routers to let routers know which of their interfaces are connected to a multicast receiver?<br>1.) IGMP<br>2.) PIM-DM<br>3.) PIM-SM<br>4.) SPT switchover",
      answer: "The correct answer is 1",
    },
    {
      section: "ISDN WAN Basics",
      question:
        "ISDN is considered to be what type of WAN connection?<br>1.) Dedicated leased line<br>2.) Circuit-switched connection<br>3.) Packet-switched connection<br>4.) Cell-switched connection",
      answer: "The correct answer is 2",
    },
    {
      section: "WAN Media Types",
      question:
        "Which of the following WAN technologies commonly use UTP cabling? (Choose all that apply)<br>1.) Cable modem<br>2.) ISDN<br>3.) DSL modem<br>4.) POTS dial-up modem",
      answer: "The correct answers are 2, 3 and 4",
    },
    {
      section: "E1 Wan Channels",
      question:
        "How many channels on an E1 circuit are available for voice, video, or data?<br>1.) 23<br>2.) 24<br>3.) 30<br>4.) 32",
      answer: "The correct answer is 3",
    },
    {
      section: "PPP Authentication Protocols",
      question:
        "Which PPP authentication method provides one-way authentication and sends credentials in clear text?<br>1.) WEP<br>2.) MS-CHAP<br>3.) PAP<br>4.) CHAP",
      answer: "The correct answer is 3",
    },
    {
      section: "Cable Modem Servicing",
      question:
        "What kind of network is used by many cable companies to service their cable modems and contains both fiber-optic and coaxial cabling?<br>1.) Head-end<br>2.) DOCSIS<br>3.) Composite<br>4.) HFC",
      answer: "The correct answer is 4",
    },
    {
      section: "ATM Payload Size",
      question:
        "How big is the payload portion of an ATM cell?<br>1.) 5 bytes<br>2.) 48 bytes<br>3.) 53 bytes<br>4.) 64 bytes",
      answer: "The correct answer is 2",
    },
    {
      section: "MPLS Header Size",
      question:
        "What is the size of an MPLS header?<br>1.) 4 bits<br>2.) 8 bits<br>3.) 16 bits<br>4.) 32 bits",
      answer: "The correct answer is 4",
    },
    {
      section: "Wireless LANs",
      question:
        "In a basic WLAN topology, how do connected clients on the network obtain IP addresses?<br>1.) DHCP<br>2.) BOOTP<br>3.) PAT<br>4.) Statically configured on client",
      answer: "The correct answer is 3",
    },
    {
      section: "Wireless LAN Antennas",
      question:
        "What type of WLAN antenna radiates relatively equal power in all directions?<br>1.) Unidirectional<br>2.) Yagi<br>3.) Parabolic<br>4.) Omnidirectional",
      answer: "The correct answer is 4",
    },
    {
      section: "WLAN Channel Selection",
      question:
        "When using the 2.4-GHz band for multiple access points in a WLAN located in the United States, which non overlapping channels should you select? (Choose all available channels)<br>1.) 0<br>2.) 1<br>3.) 5<br>4.) 6<br>5.) 10<br>6.) 11<br>7.) 14",
      answer: "The correct answers are 2, 4 and 6",
    },
    {
      section: "WLAN Access Technology",
      question:
        "What technology do WLANs use to determine when they can gain access to the wireless media?<br>1.) SPF<br>2.) CSMA/CA<br>3.) RSTP<br>4.) DUAL",
      answer: "The correct answer is 2",
    },
    {
      section: "WLAN Transmission Methods",
      question:
        "Which WLAN transmission method achieves enhanced security where participants hop over a range of predetermined frequencies?<br>1.) DSSS<br>2.) FHSS<br>3.) OFDM<br>4.) MIMO",
      answer: "The correct answer is 2",
    },
    {
      section: "Wireless AP Placement",
      question:
        "What percentage of overlap is recommended for adjacent cells in order to prevent connection dropping as a user roams when extending the range of a 2.4-GHz WLAN?<br>1.) 5-10 percent<br>2.) 10-15 percent<br>3.) 15-20 percent<br>4.) 2-25 percent",
      answer: "The correct answer is 2",
    },
    {
      section: "WLAN Security",
      question:
        "What type of authentication is said to be in use if users are not required to provide any credentials to associate with a wireless AP in order to access the WLAN?<br>1.) WEP<br>2.) SSID<br>3.) Open<br>4.) IV",
      answer: "The correct answer is 3",
    },
    {
      section: "IEEE 802.11i Security Standard",
      question:
        "What standard developed by the Wi-Fi Alliance implements the requirements of IEEE 802.11i?<br>1.) TKIP<br>2.) MIC<br>3.) WEP<br>4.) WPA2",
      answer: "The correct answer is 4",
    },
    {
      section: "NIC Redundancy Modes",
      question:
        "What mode of NIC redundancy has only one NIC active at a time?<br>1.) Publisher-subscriber<br>2.) Client-server<br>3.) Active-standby<br>4.) Active-subscriber",
      answer: "The correct answer is 3",
    },
    {
      section: "Content Caching",
      question:
        "What performance optimization technology uses a network appliance, which stores a copy of content sourced remotely such as from a Web server and serves up that content to local clients, thus reducing the bandwidth burden on an IP WAN?<br>1.) Content engine<br>2.) Load balancer<br>3.) LACP<br>4.) CARP",
      answer: "The correct answer is 1",
    },
    {
      section: "QoS Bandwidth Issues",
      question:
        "A lack of bandwidth can lead to which QoS issues? (Choose all that apply)<br>1.) Delay<br>2.) Jitter<br>3.) Prioritization<br>4.) Packet drops",
      answer: "The correct answer is 1, 2, and 4",
    },
    {
      section: "Voice QoS Policies",
      question:
        "What is the maximum recommended one-way delay for voice traffic?<br>1.) 25 ms<br>2.) 75 ms<br>3.) 125 ms<br>4.) 150 ms",
      answer: "The correct answer is 4",
    },
    {
      section: "IntServ QoS Mechanisms",
      question:
        "Which of these QoS mechanisms are considered to be an IntServ mechanism. (Choose all that apply)<br>1.) LLQ<br>2.) RSVP<br>3.) RED<br>4.) cRTP",
      answer: "The correct answer is 2",
    },
    {
      section: "Compression for Link Efficiency",
      question:
        "RTP header compression can compress the combined Layer 3 and Layer 4 headers from 40 bytes down to how many bytes?<br>1.) 1-3 bytes<br>2.) 2-4 bytes<br>3.) 3-5 bytes<br>4.) 4-6 bytes",
      answer: "The correct answer is 2",
    },
    {
      section: "LFI and Packet Delay",
      question:
        "What type of delay is the amount of time required for a packet to exit a router’s serial interface?<br>1.) Serialization delay<br>2.) Packetization delay<br>3.) Propagation delay<br>4.) Queuing delay",
      answer: "The correct answer is 1",
    },
    {
      section: "Windows arp Command",
      question:
        "Which command line switch for the arp command displays whether the arp table entry was dynamically learned or statically configured?<br>1.) -v<br>2.) -a<br>3.) -d<br>4.) -s",
      answer: "The correct answer is 2",
    },
    {
      section: "NetBios Diagnostic Command",
      question:
        "Which Windows command is used to display NetBIOS over TCP/IP information?<br>1.) route<br>2.) nbtstat<br>3.) dig<br>4.) netstat",
      answer: "The correct answer is 2",
    },
    {
      section: "Windows ipconfig Command",
      question:
        "What option would you specify after the ipconfig command to display a Windows PC’s DNS server’s IP address?<br>1.) No option is needed because the ipconfig command displays DNS server information by default.<br>2.) /full<br>3.) /fqdn<br>4.) /all",
      answer: "The correct answer is 4",
    },
    {
      section: "ping Command Basics",
      question:
        "What Layer 4 protocol is used by the ping command?<br>1.) IGMP<br>2.) PIM<br>3.) ICMP<br>4.) RTP",
      answer: "The correct answer is 3",
    },
    {
      section: "UNIX networking commands",
      question:
        "Which command is used on a UNIX host to display information about each router hop along the path from a source to a destination?<br>1.) ping -t<br>2.) tracert<br>3.) ping -r<br>4.) traceroute",
      answer: "The correct answer is 4",
    },
    {
      section: "UNIX Command Help",
      question:
        "What would you type at a UNIX command prompt to display detailed help for the UNIX host command?<br>1.) host help<br>2.) host /?<br>3.) manual host<br>4.) man host",
      answer: "The correct answer is 4",
    },
    {
      section: "UNIX ping Command",
      question:
        "Which of the following commands would you issue on a UNIX host to send five ICMP echo messages to a device with an IP address of 10.1.1.1?<br>1.) ping 10.1.1.1<br>2.) ping -c 5 10.1.1.1.<br>3.) ping -t 5 10.1.1.1<br>4.) ping 10.1.1.1 -t 5",
      answer: "The correct answer is 2",
    },
    {
      section: "Bit Error Rate Calculation",
      question:
        "One error occurred during the transmission of 8 bits. What is the BER?<br>1.) .0125<br>2.) .025<br>3.) .125<br>4.) .25",
      answer: "The correct answer is 3",
    },
    {
      section: "Cable Testing",
      question:
        "What piece of test equipment can be used to test the throughput of a Cat 5 cable?<br>1.) OTDR<br>2.) Multimeter<br>3.) BERT<br>4.) Cable certifier",
      answer: "The correct answer is 4",
    },
    {
      section: "Diagnostics Best Practices",
      question:
        "What is the best practice for preventing accidental damage to the sensitive components on a circuit board due to static from your body?<br>1.) Wear an ESD wrist strap.<br>2.) Apply antistatic spray to the circuit board.<br>3.) Ground the circuit board<br>4.) Stand on a carpeted floor (or a rug) when working on a circuit board to provide insulation between your body and an electric ground potential.",
      answer: "The correct answer is 1",
    },
    {
      section: "Network Diagnostics Equipment",
      question:
        "What piece of equipment would you use to examine the headers of Ethernet packets being transmitted from a device attached to a network?<br>1.) OTDR<br>2.) Multimeter<br>3.) Protocol analyzer<br>4.) Butt set",
      answer: "The correct answer is 3",
    },
    {
      section: "Network Management Basics",
      question:
        "What is the object structure called that SNMP uses to collect information about a managed device?<br>1.) RIB<br>2.) MIB<br>3.) DUAL<br>4.) LSA",
      answer: "The correct answer is 2",
    },
    {
      section: "Syslog Severity Levels",
      question:
        "A notification that a specific operation failed to complete successfully is classified as what syslog severity level?<br>1.) Informational (1)<br>2.) Critical (2)<br>3.) Errors (5)<br>4.) Warnings (4)",
      answer: "The correct answer is 4",
    },
    {
      section: "Windows Logs",
      question:
        "What Microsoft Windows application allows you to view a variety of log types, including application, security, and system logs?<br>1.) Event Viewer<br>2.) Performance Monitor<br>3.) Microsoft Management Console<br>4.) Control Panel",
      answer: "The correct answer is 1",
    },
    {
      section: "Data Encryption",
      question:
        "Which is a symmetric encryption algorithm available in 128-bit, 192-bit, and 256-bit key versions?<br>1.) RSA<br>2.) 3DES<br>3.) AES<br>4.) TKIP",
      answer: "The correct answer is 3",
    },
    {
      section: "Availability Attacks",
      question:
        "In what type of attack does an attacker compromise multiple systems and then instruct those compromised systems (zombies) to simultaneously flood a target system with traffic?<br>1.) DoS<br>2.) TCP SYN flood<br>3.) Buffer overflow<br>4.) DDos",
      answer: "The correct answer is 4",
    },
    {
      section: "Verifying Network Security",
      question:
        "What application would you use to verify the security of a network and also check for any weaknesses?<br>1.) Honey pot<br>2.) Posture monitor<br>3.) Profile scanner<br>4.) Vulnerability scanner",
      answer: "The correct answer is 4",
    },
    {
      section: "Firewall Basics",
      question:
        "What feature allows a firewall to permit traffic to flow from a trusted network (e.g. corporate intranet) to an untrusted network (e.g. Internet) and then allow return traffic for that same session while blocking sessions originating from the untrusted network?<br>1.) Packet filtering<br>2.) Stateful inspection<br>3.) Demilitarized zone<br>4.) Implicit deny all instruction",
      answer: "The correct answer is 2",
    },
    {
      section: "HTTPS Secured Connection",
      question:
        "Which protocols are most commonly used to provide security for an HTTPS connection? (Choose all that apply)<br>1.) L2TP<br>2.) SSL<br>3.) PPTP<br>4.) TLS",
      answer: "The correct answer is 2 and 4",
    },
    {
      section: "Intrusion Prevention and Detection",
      question:
        "Which detection methods are commonly used by IPS sensors? (Choose all that apply)<br>1.) Signature-based<br>2.) Distribution-based<br>3.) Policy-based<br>4.) Behavior-based",
      answer: "The correct answer is 1, 3, and 4",
    },
    {
      section: "Network Troubleshooting Basics",
      question:
        "Which of the following should be the most likely first step in a structured network troubleshooting methodology?<br>1.) Hypothesize the probable cause.<br>2.) Create an action plan.<br>3.) Create a post-mortem report.<br>4.) Define the problem.",
      answer: "The correct answer is 4",
    },
    {
      section: "Troubleshooting Flow",
      question:
        "Which of the following comprise a simplified troubleshooting flow? (Choose all that apply)<br>1.) Problem report<br>2.) Problem deferral<br>3.) Problem diagnosis<br>4.) Problem resolution",
      answer: "The correct answer is 1, 3, and 4",
    },
    {
      section: "Layer 2 Port Configuration",
      question:
        "What Ethernet switch feature allows a port to automatically determine which leads are for transmitting data and which are for receiving data?<br>1.) MDIX<br>2.) STP<br>3.) LAPD<br>4.) UTP",
      answer: "The correct answer is 1",
    },
    {
      section: "Layer 2 Loop Diagnosis",
      question:
        "In the absence of STP, what issue(s) might cause a Layer 2 loop to exist in a network? (Choose all that apply)<br>1.) A router interface’s MTU decrementing<br>2.) MAC address table corruption<br>3.) Broadcast storms<br>4.) Packet fragmentation",
      answer: "The correct answer is 2 and 3",
    },
    {
      section: "Network Layer Troubleshooting",
      question:
        "If you can successfully ping from host A to host B, what can you conclude about host A?<br>1.) Its OSI Layers 1-4 are functional.<br>2.) Its OSI Layers 1-3 are functional.<br>3.) Its OSI Layers 1-7 are functional.<br>4.) You can only conclude that ICMP traffic can reach host B.",
      answer: "The correct answer is 2",
    },
    {
      section: "Layer 3 Troubleshooting",
      question:
        "When a router drops a packet exceeding a router interface’s MTU size when that packet has its “do not fragment” bit set is called what?<br>1.) Route reflector<br>2.) Null hop<br>3.) Zero-point router<br>4.) Black-hole router",
      answer: "The correct answer is 4",
    },
    {
      section: "Subnet Troubleshooting",
      question:
        "To what subnet does a host with an IP address of 172.16.155.10/18 belong?<br>1.) 172.16.0.0/18<br>2.) 172.16.96.0/18<br>3.) 172.16.128.0/18<br>4.) 172.16.154.0/18",
      answer: "The correct answer is 3",
    },
    {
      section: "Wireless Network Troubleshooting",
      question:
        "What are some of the common sources of wireless network radio frequency interference (RFI)? (Choose all that apply)<br>1.) Game consoles<br>2.) 900 MHz cordless phones<br>3.) Microwave ovens<br>4.) Baby monitors",
      answer: "The correct answer is 1, 3, and 4",
    },
  ],
  "Comptia": [
    {
      section: "Basic Network Components",
      question: "Which component provides resources over a network?",
      answer: "Server",
    },
    {
      section: "Dynamic NAT",
      question:
        "What NAT variation automatically assigns an inside global address to a device on the private network from a pool of available addresses?",
      answer: "DNAT (Dynamic NAT)",
    },
    {
      section: "NAT Basics",
      question:
        "What NAT IP address is a public address that references an inside device?",
      answer: "Inside global",
    },
    {
      section: "Exterior Gateway Protocols (EGP)",
      question: "Which routing protocol is an EGP?",
      answer: "BGP (Border Gateway Protocol)",
    },
    {
      section: "Preventing Routing Loops",
      question:
        "What are features of distance-vector routing protocols used to prevent routing loops?",
      answer: "Split horizon and Poison reverse",
    },
    {
      section: "Believability of a Route",
      question:
        "What routing protocol characteristic indicates the believability of the routing protocol?",
      answer: "Administrative distance",
    },
    {
      section: "Default Route",
      question:
        "What is the network address and subnet mask of a default route?",
      answer: "0.0.0.0/0",
    },
    {
      section: "Destination IP Address",
      question:
        "When a PC on an Ethernet network attempts to communicate with a host on a different subnet, what destination IP address and destination MAC address are placed in the packet/frame header transmitted by the client PC?",
      answer:
        "IP address of the remote host and MAC address of the default gateway",
    },
    {
      section: "IPv6 Address Abbreviation",
      question:
        "Simplify the following IPv6 address: 0AA0:0123:4040:0000:0000:000:000A:100B",
      answer: "AA0:123:4040::A:100B",
    },
    {
      section: "Classful Masks",
      question:
        "A client with an IP address of 172.16.18.5/18 belongs to what network?",
      answer: "172.16.0.0/18",
    },
    {
      section: "Network Subnetting",
      question:
        "Your company has been assigned the following network: 192.168.30.0/24. What subnet mask will accommodate seven subnets while also accommodating the maximum number of hosts per subnet?",
      answer: "/27",
    },
    {
      section: "Prefix Notation",
      question:
        "What is the prefix notation for a subnet mask of 255.255.255.240?",
      answer: "/28",
    },
    {
      section: "IP Address Assignment",
      question:
        "What are dynamic methods for assigning IP addresses to networked devices?",
      answer: "BOOTP and DHCP",
    },
    {
      section: "IP Address Classes",
      question: "What is the class of IP address 10.1.2.3?",
      answer: "Class A",
    },
    {
      section: "Decimal To Binary Conversion",
      question:
        "What is the decimal representation for this binary number: 10110100?",
      answer: "180",
    },
    {
      section: "Binary To Decimal Conversion",
      question: "What is the binary representation of the decimal number 117?",
      answer: "01110101",
    },
    {
      section: "Network Authentication",
      question:
        "Which device on IEEE 802.1X is responsible for checking the credentials of a device seeking to gain access to the network?",
      answer: "Authentication server",
    },
    {
      section: "Packet Sniffing Fundamentals",
      question:
        "What feature on a switch would you enable to allow monitoring traffic between two ports from a third port using Wireshark?",
      answer: "Port mirroring",
    },
    {
      section: "Power Over Ethernet Specifications",
      question:
        "What is the maximum amount of power a switch is allowed to provide over any one port as specified by the IEEE 802.3af standard for PoE?",
      answer: "15.4 W",
    },
    {
      section: "Spanning Tree Protocol Basics",
      question:
        "On a network running STP, what is the port within each segment that is closest to the root bridge (in terms of cost) called?",
      answer: "Designated port",
    },
    {
      section: "VLAN Essentials",
      question: "What are true statements about VLANs?",
      answer:
        "A VLAN has a single broadcast domain, and for traffic to pass between two VLANs, the traffic must be routed",
    },
    {
      section: "Ethernet Collision Detection and Handling",
      question:
        "When two devices simultaneously transmit data on an Ethernet network and a collision is detected, what happens?",
      answer:
        "Each device sets a random back off timer and will attempt to resend its data after its timer expires",
    },
    {
      section: "Ethernet Origins",
      question: "Which Ethernet implementation uses UTP?",
      answer: "10BASE-T",
    },
    {
      section: "Proxy Server Benefits",
      question: "What are the possible benefits of a proxy server?",
      answer: "Content filtering, Data caching, and Security",
    },
    {
      section: "Specialized Network Devices",
      question:
        "Which device allows traffic to enter and exit a private corporate network?",
      answer: "Firewall",
    },
    {
      section: "Switch Broadcast Domains",
      question: "How many broadcast domains does a 12-port switch have?",
      answer: "One",
    },
    {
      section: "Router Broadcast Domains",
      question: "How many broadcast domains does a 12-port router have?",
      answer: "Twelve",
    },
    {
      section: "Network Infrastructure Devices",
      question:
        "Which network infrastructure device primarily makes forwarding decisions based on MAC addresses?",
      answer: "Switch",
    },
    {
      section: "Environmental Considerations of Cabling",
      question:
        "Which type of cable would you choose for installation in a drop ceiling that is used as an open air return duct?",
      answer: "Plenum",
    },
    {
      section: "UTP Cabling",
      question:
        "Which categories of UTP cabling are suitable for 1000BASE-T networks?",
      answer: "Cat 5e and Cat 6",
    },
    {
      section: "TCP and UDP Ports",
      question:
        "In which range is the TCP port number for the HTTP protocol located?",
      answer: "Below 1024",
    },
    {
      section: "TCP/IP Stack",
      question: "What are the four layers of the TCP/IP stack?",
      answer: "Network Interface, Internet, Transport, Application",
    },
    {
      section: "Windowing Flow Control Service",
      question: "What best describes the windowing flow control service?",
      answer:
        "A transport layer flow control service that exponentially increases the number of segments transmitted for each successfully acknowledged transmission reception",
    },
    {
      section: "Connectionless Transport Layer Protocol",
      question: "Which protocol is a connectionless transport layer protocol?",
      answer: "UDP",
    },
    {
      section: "Bandwidth Usage",
      question:
        "Which approach to bandwidth usage on a network utilizes all available frequencies on a medium for data transmission?",
      answer: "Baseband",
    },
    {
      section: "OSI Model",
      question:
        "Which layer of the OSI reference model is responsible for providing email services?",
      answer: "Application layer",
    },
    {
      section: "Resource Sharing Features",
      question:
        "What is an advantage of a peer-to-peer network when compared with a client-server network?",
      answer: "Less Expensive",
    },
    {
      section: "Resource Location",
      question:
        "Does a peer-to-peer network require that all connected computers be running the same OS in order to share resources?",
      answer: "False",
    },
    {
      section: "Network Topology Features",
      question:
        "What are two true statements regarding a Hub-and-Spoke topology?",
      answer: "Lower cost and easy to add remote sites",
    },
    {
      section: "Network Topology",
      question:
        "Which network topology offers both an optimal route between selected sites as well as avoiding the expense of interconnecting every site to every other site?",
      answer: "Partial mesh",
    },
    {
      section: "Network Geography Features",
      question:
        "What type of network connects a wireless headset to a PC using Bluetooth?",
      answer: "PAN (Personal Area Network)",
    },
    {
      section: "Network Geography",
      question:
        "Which network geography would you expect to see deployed to connect the LANs of multiple office buildings within an industrial park?",
      answer: "CAN (Campus Area Network)",
    },
    {
      section: "Features of Network Components",
      question:
        "Which network component is purely physical (has no intelligence in the form of an embedded processing)?",
      answer: "Hub",
    },
    {
      section: "Multicast Protocols",
      question:
        "What multicast protocol is used between clients and routers to let routers know which of their interfaces are connected to a multicast receiver?",
      answer: "IGMP (Internet Group Management Protocol)",
    },
    {
      section: "ISDN WAN Basics",
      question: "What type of WAN connection is ISDN considered to be?",
      answer: "Circuit-switched connection",
    },
    {
      section: "WAN Media Types",
      question: "Which WAN technologies commonly use UTP cabling?",
      answer: "ISDN, DSL modem, and POTS dial-up modem",
    },
    {
      section: "E1 Wan Channels",
      question:
        "How many channels on an E1 circuit are available for voice, video, or data?",
      answer: "30",
    },
    {
      section: "PPP Authentication Protocols",
      question:
        "Which PPP authentication method provides one-way authentication and sends credentials in clear text?",
      answer: "PAP (Password Authentication Protocol)",
    },
    {
      section: "Cable Modem Servicing",
      question:
        "What kind of network is used by many cable companies to service their cable modems and contains both fiber-optic and coaxial cabling?",
      answer: "HFC (Hybrid Fiber-Coaxial)",
    },
    {
      question:
        "Which network topology uses a central device to forward messages to the destination device?",
      answer: "Star",
      section: "Network Topology",
    },
    {
      question:
        "Which network topology has multiple pathways to send data to a destination device?",
      answer: "Mesh",
      section: "Network Topology",
    },
    {
      question:
        "The internet is a collection of connected networks. Select the topology that is similar to how the internet is physically connected.",
      answer: "Mesh",
      section: "Network Topology",
    },
    {
      question:
        "Which network topology is the most popular for building modern LAN's?",
      answer: "Star",
      section: "Network Topology",
    },
    {
      question:
        "Which network topology gives each host direct access to each other host?",
      answer: "Mesh",
      section: "Network Topology",
    },
    {
      question: "Which network topology is the most reliable?",
      answer: "Mesh",
      section: "Network Topology",
    },
    {
      question: "Which network topology is the least expensive to install?",
      answer: "Bus",
      section: "Network Topology",
    },
    {
      question: "Which network topology is the most difficult to troubleshoot?",
      answer: "Mesh",
      section: "Network Topology",
    },
    {
      question: "Which network topology is the most scalable?",
      answer: "Star",
      section: "Network Topology",
    },
    {
      question:
        "Which network topology is the most susceptible to a single point of failure?",
      answer: "Star",
      section: "Network Topology",
    },
    {
      question: "Which network topology is the easiest to install?",
      answer: "Bus",
      section: "Network Topology",
    },
    {
      question:
        "Which network topology is the most susceptible to electromagnetic interference?",
      answer: "Bus",
      section: "Network Topology",
    },
    {
      question:
        "Which network topology is the most commonly used in home networks?",
      answer: "Star",
      section: "Network Topology",
    },
    {
      question:
        "Which network topology is the most commonly used in large enterprise networks?",
      answer: "Mesh",
      section: "Network Topology",
    },
    {
      question:
        "Which network topology is the most commonly used in wireless networks?",
      answer: "Star",
      section: "Network Topology",
    },
    {
      question: "Which network topology is the most flexible?",
      answer: "Star",
      section: "Network Topology",
    },
    {
      question: "Which network topology is the easiest to expand?",
      answer: "Star",
      section: "Network Topology",
    },
    {
      question: "Which network topology is the most secure?",
      answer: "Mesh",
      section: "Network Topology",
    },
    {
      question:
        "Which network topology is the most suitable for small networks?",
      answer: "Star",
      section: "Network Topology",
    },
    {
      question:
        "Which network topology is the most suitable for large networks?",
      answer: "Mesh",
      section: "Network Topology",
    },
    {
      question:
        "Which network topology is the most commonly used in school networks?",
      answer: "Star",
      section: "Network Topology",
    },
    {
      question:
        "Which network topology is the most commonly used in server farms?",
      answer: "Mesh",
      section: "Network Topology",
    },
    {
      question:
        "Which network topology is the most commonly used in point-of-sale systems?",
      answer: "Star",
      section: "Network Topology",
    },
    {
      section: "CompTia",
      question:
        "Which networking term refers to nodes that send and receive data traffic?",
      answer: "End systems",
    },
    {
      section: "CompTia",
      question:
        "What network model allows each computer to act as both client and server?",
      answer: "Peer-to-Peer network",
    },
    {
      section: "CompTia",
      question:
        "Which network type is most effective for a company with 50 employees, multiple printers, and a centralized server?",
      answer: "Small and Medium-sized Enterprise (SME) network",
    },
    {
      section: "CompTia",
      question:
        "What network connects multiple offices across different countries?",
      answer: "Wide Area Network (WAN)",
    },
    {
      section: "CompTia",
      question:
        "How do half-duplex and full-duplex differ in point-to-point communication?",
      answer:
        "Half-duplex allows data transmission in both directions but not simultaneously; full-duplex permits simultaneous two-way transmission",
    },
    {
      section: "CompTia",
      question:
        "What topology allows devices to communicate as if directly connected?",
      answer: "Logical topology",
    },
    {
      section: "CompTia",
      question: "In a star topology, what happens if a drop cable is removed?",
      answer:
        "Only the disconnected device is affected; others remain connected",
    },
    {
      section: "CompTia",
      question:
        "Which topology connects devices to a central forwarding appliance?",
      answer: "Star",
    },
    {
      section: "CompTia",
      question: "In a full mesh topology, what happens if one link breaks?",
      answer: "All other devices can still communicate",
    },
    {
      section: "CompTia",
      question:
        "What topology is used in an ad hoc wireless network without an access point?",
      answer: "Mesh",
    },
    {
      section: "CompTia",
      question:
        "Which topology saves power and scales for IoT devices using Zigbee?",
      answer: "Mesh",
    },
    {
      section: "Comptia",
      question:
        "A limit on the maximum amount of data that can be transmitted over a network without fragmentation is referred to as: ",
      answer: " MTU",
    },
    {
      section: "Comptia",
      question: "Authentication and authorization take place at the: ",
      answer: " Session layer of the OSI model",
    },
    {
      section: "Comptia",
      question:
        "Data format translation, data compression, and data encryption/decryption take place at the: ",
      answer: " Presentation layer of the OSI model",
    },
    {
      section: "Comptia",
      question:
        'In the context of the OSI model, the term "Data encapsulation" is used to describe a process where each layer of the OSI model adds its own control information to the original data that is being passed across the layers from the physical layer up to the application layer. ',
      answer: " False",
    },
    {
      section: "Comptia",
      question: "In the OSI model, the layer 2 PDU is called: ",
      answer: " Frame",
    },
    {
      section: "Comptia",
      question: "In the OSI model, the layer 3 PDU is known as: ",
      answer: " Packet",
    },
    {
      section: "Comptia",
      question: "In the OSI model, the layer 4 TCP PDU is known as: ",
      answer: " Segment",
    },
    {
      section: "Comptia",
      question: "In the OSI model, the layer 4 UDP PDU is called: ",
      answer: " Datagram",
    },
    {
      section: "Comptia",
      question:
        "In the OSI model, the payload data (a.k.a. user data) is the actual data that is being nested between header and tail control information. ",
      answer: " True",
    },
    {
      section: "Comptia",
      question: "In the OSI model, the physical layer PDU is known as: ",
      answer: " Bit",
    },
    {
      section: "Comptia",
      question: "Layer 2 of the OSI model is also referred to as: ",
      answer: " Data Link Layer",
    },
    {
      section: "Comptia",
      question: "Layer 4 of the OSI model is also known as: ",
      answer: " Transport layer",
    },
    {
      section: "Comptia",
      question: "Layer 5 of the OSI model is also referred to as: ",
      answer: " Session layer",
    },
    {
      section: "Comptia",
      question: "Physical layer of the OSI model is also known as: ",
      answer: " Layer 1",
    },
    {
      section: "Comptia",
      question: "The application layer of the OSI model is also known as: ",
      answer: " Layer 7",
    },
    {
      section: "Comptia",
      question: 'The term "Presentation layer" refers to: ',
      answer: " Layer 6 of the OSI model",
    },
    {
      section: "Comptia",
      question:
        "Transmission Control Protocol (TCP) is an example of a connectionless protocol. Because TCP does not support three-way handshake while establishing a network connection, it is referred to as unreliable or best-effort protocol. Example applications of TCP include transmission of video and audio streaming data. ",
      answer: " False",
    },
    {
      section: "Comptia",
      question:
        "User Datagram Protocol (UDP) is a connection-oriented protocol using a three-way handshake which is a set of initial steps required for establishing network connection. UDP supports retransmission of lost packets, flow control (managing the amount of data that is being sent), and sequencing (rearranging packets that arrived out of order). Example applications of UDP include transmission of text and image data. ",
      answer: " False",
    },
    {
      section: "Comptia",
      question:
        "What are the characteristic components of the OSI data link layer? (Select 3 answers) ",
      answer: " Network switch<br>MAC address<br>Ethernet frame",
    },
    {
      section: "Comptia",
      question:
        "What is the name of a network layer protocol that specifies the format of packets and addressing scheme in network communications? ",
      answer: " IP",
    },
    {
      section: "Comptia",
      question:
        "Which of the answers listed below refers to a data link layer device designed to forward frames between network segments? ",
      answer: " Switch",
    },
    {
      section: "Comptia",
      question:
        "Which of the following answers does not refer to the OSI UDP datagram header? ",
      answer: " Layer 3 header",
    },
    {
      section: "Comptia",
      question:
        "Which of the following answers refer to examples of network layer header data? (Select 2 answers) ",
      answer: " Destination IP address<br>Source IP address",
    },
    {
      section: "Comptia",
      question:
        "Which of the following answers refer to the OSI layer 2 header data? (Select 2 answers) ",
      answer: " Source MAC address<br>Destination MAC address",
    },
    {
      section: "Comptia",
      question:
        "Which of the following answers refer to the OSI network layer components? (Select 3 answers) ",
      answer: " Packet<br>IP address<br>Router",
    },
    {
      section: "Comptia",
      question:
        "Which of the following protocols reside(s) at the application layer of the OSI model? (Select all that apply) ",
      answer: " HTTP<br>FTP<br>SMTP",
    },
    {
      section: "Comptia",
      question:
        "Which of the following reside at the physical layer of the OSI model? (Select 3 answers) ",
      answer: " Network cabling<br>Repeater<br>Hub",
    },
    {
      section: "Comptia",
      question:
        "Which of the following TCP flags are used for establishing a network connection via TCP three-way handshake? (Select 2 answers) ",
      answer: " SYN<br>ACK",
    },
    {
      section: "Comptia",
      question:
        "Which of the following terms refers to the OSI network layer? ",
      answer: " Layer 3",
    },
    {
      section: "Comptia",
      question:
        "Which of the protocols listed below reside at the OSI transport layer? (Select 2 answers) ",
      answer: " UDP/TCP",
    },
    {
      section: "Comptia",
      question:
        "Which OSI layer assumes the responsibility for opening, closing, and maintaining connections between applications? ",
      answer: " Session layer",
    },
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
      "section": "Ports",
      "question": "What port is File Transfer Protocol (FTP)?",
      "answer": "20/21"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 20/21?",
      "answer": "File Transfer Protocol (FTP)"
    },
    {
      "section": "Ports",
      "question": "What port is Secure Shell (SSH)?",
      "answer": "22"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 22?",
      "answer": "Secure Shell (SSH) and Secure File Transfer Protocol (SFTP)"
    },
    {
      "section": "Ports",
      "question": "What port is Secure File Transfer Protocol (SFTP)?",
      "answer": "22"
    },
    {
      "section": "Ports",
      "question": "What port is Telnet?",
      "answer": "23"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 23?",
      "answer": "Telnet"
    },
    {
      "section": "Ports",
      "question": "What port is Simple Mail Transfer Protocol (SMTP)?",
      "answer": "25"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 25?",
      "answer": "Simple Mail Transfer Protocol (SMTP)"
    },
    {
      "section": "Ports",
      "question": "What port is Domain Name System (DNS)?",
      "answer": "53"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 53?",
      "answer": "Domain Name System (DNS)"
    },
    {
      "section": "Ports",
      "question": "What port is Dynamic Host Configuration Protocol (DHCP)?",
      "answer": "67/68"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 67/68?",
      "answer": "Dynamic Host Configuration Protocol (DHCP)"
    },
    {
      "section": "Ports",
      "question": "What port is Trivial File Transfer Protocol (TFTP)?",
      "answer": "69"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 69?",
      "answer": "Trivial File Transfer Protocol (TFTP)"
    },
    {
      "section": "Ports",
      "question": "What port is Hypertext Transfer Protocol (HTTP)?",
      "answer": "80"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 80?",
      "answer": "Hypertext Transfer Protocol (HTTP)"
    },
    {
      "section": "Ports",
      "question": "What port is Post Office Protocol v3 (POP3)?",
      "answer": "110"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 110?",
      "answer": "Post Office Protocol v3 (POP3)"
    },
    {
      "section": "Ports",
      "question": "What port is Network Time Protocol (NTP)?",
      "answer": "123"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 123?",
      "answer": "Network Time Protocol (NTP)"
    },
    {
      "section": "Ports",
      "question": "What port is Internet Message Access Protocol (IMAP)?",
      "answer": "143"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 143?",
      "answer": "Internet Message Access Protocol (IMAP)"
    },
    {
      "section": "Ports",
      "question": "What port is Simple Network Management Protocol (SNMP)?",
      "answer": "161/162"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 161/162?",
      "answer": "Simple Network Management Protocol (SNMP)"
    },
    {
      "section": "Ports",
      "question": "What port is Lightweight Directory Access Protocol (LDAP)?",
      "answer": "389"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 389?",
      "answer": "Lightweight Directory Access Protocol (LDAP)"
    },
    {
      "section": "Ports",
      "question": "What port is Hypertext Transfer Protocol Secure (HTTPS)?",
      "answer": "443"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 443?",
      "answer": "Hypertext Transfer Protocol Secure (HTTPS)"
    },
    {
      "section": "Ports",
      "question": "What port is Server Message Block (SMB)?",
      "answer": "445"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 445?",
      "answer": "Server Message Block (SMB)"
    },
   {
      "section": "Ports",
      "question": "What port is Syslog?",
      "answer": "514"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 514?",
      "answer": "Syslog"
    },
   {
      "section": "Ports",
      "question": "What port is SMTP TLS?",
      "answer": "587"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 587?",
      "answer": "SMTP TLS"
    },
    {
      "section": "Ports",
      "question": "What port is Lightweight Directory Access Protocol (LDAPS)?",
      "answer": "636"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 636?",
      "answer": "Lightweight Directory Access Protocol (over SSL) (LDAPS)"
    },
    {
      "section": "Ports",
      "question": "What port is IMAP over SSL?",
      "answer": "993"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 993?",
      "answer": "IMAP over SSL"
    },
    {
      "section": "Ports",
      "question": "What port is POP3 over SSL?",
      "answer": "995"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 995?",
      "answer": "POP3 over SSL"
    },
    {
      "section": "Ports",
      "question": "What port is Structured Query Language (SQL) Server?",
      "answer": "1433"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 1433?",
      "answer": "Structured Query Language (SQL) Server"
    },
    {
      "section": "Ports",
      "question": "What port is SOLnet?",
      "answer": "1521"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 1521?",
      "answer": "SOLnet"
    },
    {
      "section": "Ports",
      "question": "What port is MySQL?",
      "answer": "3306"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 3306?",
      "answer": "MySQL"
    },
    {
      "section": "Ports",
      "question": "What port is Remote Desktop Protocol (RDP)?",
      "answer": "3389"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 3389?",
      "answer": "Remote Desktop Protocol (RDP)"
    },
    {
      "section": "Ports",
      "question": "What port is Session Initiation Protocol (SIP)?",
      "answer": "5060/5061"
    },
    {
      "section": "Ports",
      "question": "What protocol uses port 5060/5061?",
      "answer": "Session Initiation Protocol (SIP)"
    }
  ],
  "The Stranger Vocab": [
    {
      "section": "Vocab",
      "question": "Destitute",
      "answer": ""
    },
    {
      "section": "Vocab",
      "question": "Palor",
      "answer": ""
    },
    {
      "section": "Vocab",
      "question": "Furtive",
      "answer": ""
    },
    {
      "section": "Vocab",
      "question": "Taciturn",
      "answer": ""
    },
    {
      "section": "Vocab",
      "question": "Indignant",
      "answer": ""
    },
    {
      "section": "Vocab",
      "question": "Enumerate",
      "answer": ""
    },
    {
      "section": "Vocab",
      "question": "Reproach",
      "answer": ""
    },
    {
      "section": "Vocab",
      "question": "Implacable",
      "answer": ""
    },
    {
      "section": "Vocab",
      "question": "Tacit",
      "answer": ""
    },
    {
      "section": "Vocab",
      "question": "Respite",
      "answer": ""
    },
    {
      "section": "Vocab",
      "question": "Odious",
      "answer": ""
    },
    {
      "section": "Vocab",
      "question": "Dubious",
      "answer": ""
    }
  ]
};
