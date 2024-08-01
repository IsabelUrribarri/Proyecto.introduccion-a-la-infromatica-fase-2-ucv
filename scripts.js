document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar el botón de login
    const loginButton = document.querySelector('.login100-form-btn');
    // Verificar si el botón de login existe
    if (loginButton) {
        loginButton.addEventListener('click', function (e) {
            e.preventDefault();
            // Redirigir a la página de cursos cuando se haga clic en el botón
            window.location.href = "courses.html";
        });
    }
    // Definir las preguntas para los cursos de Python y C++
    const quizzes = {
        python: {
            questions: [
                {
                    type: "true_false",
                    question: "Python es un lenguaje de programación interpretado.",
                    answer: true
                },
                {
                    type: "multiple_choice",
                    question: "¿Cuál de los siguientes es un tipo de dato en Python?",
                    options: ["String", "Integer", "Float", "All of the above"],
                    answer: 3
                },
                {
                    type: "single_choice",
                    question: "¿Qué estructura de datos se utiliza para almacenar pares clave-valor?",
                    options: ["List", "Dictionary", "Set", "Tuple"],
                    answer: 1
                },
                {
                    type: "true_false",
                    question: "Python soporta múltiples herencias.",
                    answer: true
                },
                {
                    type: "multiple_choice",
                    question: "Selecciona todos los métodos para manipular listas en Python.",
                    options: ["append", "extend", "pop", "insert", "join"],
                    answer: [0, 1, 2, 3]
                },
                {
                    type: "single_choice",
                    question: "¿Cuál es la sintaxis correcta para definir una función en Python?",
                    options: ["def function_name[]:", "function_name() -> {", "function function_name():", "def function_name():", "func function_name[]:"],
                    answer: 3
                },
                {
                    type: "true_false",
                    question: "En Python, el operador `==` se usa para comparar la igualdad.",
                    answer: true
                },
                {
                    type: "multiple_choice",
                    question: "¿Cuáles de las siguientes son funciones incorporadas en Python?",
                    options: ["len()", "print()", "input()", "concat()"],
                    answer: [0, 1, 2]
                },
                {
                    type: "single_choice",
                    question: "¿Cómo se puede hacer una cadena de caracteres en Python?",
                    options: ["'cadena'", "\"cadena\"", "c.cadena", "Ambas anteriores"],
                    answer: 3
                },
                {
                    type: "true_false",
                    question: "Las listas en Python son inmutables.",
                    answer: false
                },
                {
                    type: "multiple_choice",
                    question: "Selecciona todos los métodos para trabajar con diccionarios en Python.",
                    options: ["get()", "keys()", "values()", "append()"],
                    answer: [0, 1, 2]
                },
                {
                    type: "single_choice",
                    question: "¿Qué palabra clave se utiliza para manejar excepciones en Python?",
                    options: ["catch", "try", "except", "throw"],
                    answer: 2
                },
                {
                    type: "true_false",
                    question: "Los sets en Python permiten elementos duplicados.",
                    answer: false
                },
                {
                    type: "multiple_choice",
                    question: "Selecciona todos los operadores aritméticos en Python.",
                    options: ["+", "-", "*", "/", "%", "^"],
                    answer: [0, 1, 2, 3, 4]
                },
                {
                    type: "single_choice",
                    question: "¿Qué método se usa para eliminar un elemento de una lista en Python?",
                    options: ["remove()", "delete()", "pop()", "discard()"],
                    answer: 0
                },
                {
                    type: "true_false",
                    question: "En Python, los argumentos de una función pueden tener valores predeterminados.",
                    answer: true
                },
                {
                    type: "multiple_choice",
                    question: "Selecciona todos los tipos de bucles disponibles en Python.",
                    options: ["for", "while", "do while", "repeat"],
                    answer: [0, 1]
                },
                {
                    type: "single_choice",
                    question: "¿Qué estructura se usa para manejar excepciones en Python?",
                    options: ["try-except", "catch-finally", "throw-catch", "try-catch"],
                    answer: 0
                },
                {
                    type: "true_false",
                    question: "Los diccionarios en Python son ordenados por defecto.",
                    answer: true
                },
                {
                    type: "multiple_choice",
                    question: "Selecciona todos los métodos para manipular cadenas en Python.",
                    options: ["split()", "join()", "strip()", "replace()", "format()"],
                    answer: [0, 1, 2, 3, 4]
                },
                {
                    type: "single_choice",
                    question: "¿Cómo se declara una variable global en una función de Python?",
                    options: ["global variable", "var variable", "global", "declare variable"],
                    answer: 2
                },
                {
                    type: "true_false",
                    question: "Python es un lenguaje de programación compilado.",
                    answer: false
                },
                {
                    type: "multiple_choice",
                    question: "Selecciona todos los módulos estándar en Python.",
                    options: ["math", "os", "sys", "http"],
                    answer: [0, 1, 2]
                },
                {
                    type: "single_choice",
                    question: "¿Qué método se usa para abrir un archivo en Python?",
                    options: ["open()", "file()", "read()", "write()"],
                    answer: 0
                },
                {
                    type: "true_false",
                    question: "Las variables en Python son de tipo estático.",
                    answer: false
                },
                {
                    type: "multiple_choice",
                    question: "Selecciona todos los operadores de comparación en Python.",
                    options: ["==", "!=", ">", "<", ">=", "<="],
                    answer: [0, 1, 2, 3, 4, 5]
                }
            ]
        },
        cpp: {
            questions: [
                {
                    type: "true_false",
                    question: "C++ es un lenguaje de programación orientado a objetos.",
                    answer: true
                },
                {
                    type: "multiple_choice",
                    question: "¿Cuál de los siguientes es un tipo de dato en C++?",
                    options: ["char", "int", "double", "All of the above"],
                    answer: 3
                },
                {
                    type: "single_choice",
                    question: "¿Qué palabra clave se usa para definir una constante en C++?",
                    options: ["const", "let", "final", "static"],
                    answer: 0
                },
                {
                    type: "true_false",
                    question: "C++ no soporta la sobrecarga de operadores.",
                    answer: false
                },
                {
                    type: "multiple_choice",
                    question: "Selecciona todos los tipos de acceso en C++.",
                    options: ["private", "public", "protected", "restricted"],
                    answer: [0, 1, 2]
                },
                {
                    type: "single_choice",
                    question: "¿Cuál es el operador para la asignación en C++?",
                    options: ["==", "=", "+="],
                    answer: 1
                },
                {
                    type: "true_false",
                    question: "En C++, la palabra clave `static` se usa para definir variables de clase.",
                    answer: true
                },
                {
                    type: "multiple_choice",
                    question: "¿Cuáles son los operadores lógicos en C++?",
                    options: ["&&", "||", "!", "&"],
                    answer: [0, 1, 2]
                },
                {
                    type: "single_choice",
                    question: "¿Qué palabra clave se usa para crear una clase en C++?",
                    options: ["class", "struct", "object", "define"],
                    answer: 0
                },
                {
                    type: "true_false",
                    question: "En C++, los punteros pueden apuntar a direcciones de memoria no válidas.",
                    answer: true
                },
                {
                    type: "multiple_choice",
                    question: "Selecciona todos los operadores aritméticos en C++.",
                    options: ["+", "-", "*", "/", "%", "^"],
                    answer: [0, 1, 2, 3, 4]
                },
                {
                    type: "single_choice",
                    question: "¿Cómo se define una función miembro en una clase de C++?",
                    options: ["void function()", "function(void)", "public void function()", "void class::function()"],
                    answer: 3
                },
                {
                    type: "true_false",
                    question: "En C++, el constructor de una clase debe tener el mismo nombre que la clase.",
                    answer: true
                },
                {
                    type: "multiple_choice",
                    question: "Selecciona todos los métodos para manipular cadenas en C++.",
                    options: ["length()", "substr()", "append()", "find()"],
                    answer: [0, 1, 2, 3]
                },
                {
                    type: "single_choice",
                    question: "¿Qué operador se utiliza para la resolución de alcance en C++?",
                    options: ["::", ".", "->", ":::"],
                    answer: 0
                },
                {
                    type: "true_false",
                    question: "En C++, las variables miembro deben ser inicializadas en el constructor.",
                    answer: false
                },
                {
                    type: "multiple_choice",
                    question: "Selecciona todos los tipos de datos básicos en C++.",
                    options: ["int", "float", "char", "bool", "string"],
                    answer: [0, 1, 2, 3]
                },
                {
                    type: "single_choice",
                    question: "¿Cuál es el operador para la comparación de igualdad en C++?",
                    options: ["==", "=", "==="],
                    answer: 0
                },
                {
                    type: "true_false",
                    question: "En C++, el destructor de una clase tiene el mismo nombre que la clase, precedido por una tilde (~).",
                    answer: true
                },
                {
                    type: "multiple_choice",
                    question: "Selecciona todos los modificadores de acceso en C++.",
                    options: ["public", "private", "protected", "friend"],
                    answer: [0, 1, 2]
                },
                {
                    type: "single_choice",
                    question: "¿Cuál es la palabra clave para crear una instancia de una clase en C++?",
                    options: ["new", "create", "instantiate", "make"],
                    answer: 0
                },
                {
                    type: "true_false",
                    question: "En C++, se puede sobrecargar el operador `+` para concatenar dos cadenas.",
                    answer: true
                },
                {
                    type: "multiple_choice",
                    question: "Selecciona todos los tipos de bucles en C++.",
                    options: ["for", "while", "do while", "foreach"],
                    answer: [0, 1, 2]
                },
                {
                    type: "single_choice",
                    question: "¿Qué palabra clave se usa para manejar excepciones en C++?",
                    options: ["try", "catch", "throw", "exception"],
                    answer: 0
                },
                {
                    type: "true_false",
                    question: "En C++, el puntero `nullptr` es una constante que representa un puntero nulo.",
                    answer: true
                },
                {
                    type: "multiple_choice",
                    question: "Selecciona todos los operadores de asignación en C++.",
                    options: ["=", "+=", "-=", "*=", "/=", "%="],
                    answer: [0, 1, 2, 3, 4, 5]
                }
            ]
        }
    };

    const quizContainer = document.querySelector('.quiz-container');
    const course = new URLSearchParams(window.location.search).get('course');

    // Verificar si el curso es válido y existe en los datos del quiz
    if (course && quizzes[course]) {
        const quiz = quizzes[course];
        let score = 0; // Inicializar la puntuación
        let currentQuestionIndex = 0;

        // Función para renderizar la pregunta actual
        function renderQuestion() {
            const questionObj = quiz.questions[currentQuestionIndex];
            quizContainer.innerHTML = `
                <div class="question">${questionObj.question}</div>
                ${questionObj.options ? questionObj.options.map((option, index) => `
                    <label>
                        <input type="${questionObj.type === 'multiple_choice' ? 'checkbox' : 'radio'}" name="option" value="${index}">
                        ${option}
                    </label>
                `).join('') : `
                    <label>
                        <input type="radio" name="option" value="true"> Verdadero
                    </label>
                    <label>
                        <input type="radio" name="option" value="false"> Falso
                    </label>
                `}
                <button class="next-btn">Siguiente</button>
            `;

            const nextBtn = quizContainer.querySelector('.next-btn');
            nextBtn.addEventListener('click', function () {
                const selectedOption = quizContainer.querySelector('input[name="option"]:checked');
                if (selectedOption) {
                    const answer = questionObj.type === 'true_false' ? (selectedOption.value === 'true') : parseInt(selectedOption.value);
                    if (Array.isArray(questionObj.answer)) {
                        const selectedValues = Array.from(quizContainer.querySelectorAll('input[name="option"]:checked')).map(input => parseInt(input.value));
                        if (JSON.stringify(selectedValues.sort()) === JSON.stringify(questionObj.answer.sort())) {
                            score++;
                        }
                    } else {
                        if (answer === questionObj.answer) {
                            score++;
                        }
                    }
                    currentQuestionIndex++;
                    if (currentQuestionIndex < quiz.questions.length) {
                        renderQuestion();
                    } else {
                        clearInterval(timerInterval);
                        displayResult(); //Mostrar el resultado cuando se hayan respondido todas las preguntas
                    }
                } else {
                    alert("Por favor selecciona una respuesta"); // Advertencia si no se ha seleccionado una respuesta
                }
            });
        }

        // Función para mostrar el resultado final del quiz
        function displayResult() {
            const passingScore = Math.floor(quiz.questions.length * 0.6); // Puntaje de aprobación (60%)
            quizContainer.innerHTML = '';// Limpiar el contenedor del quiz
            if (score >= passingScore) {
                // Mostrar mensaje de aprobación y botón para mostrar certificado
                quizContainer.innerHTML = `
                    <div class="result">Tu puntuación es ${score}/${quiz.questions.length}. ¡Felicidades, aprobaste el quiz!</div>
                    <button class="show-certificate-btn">Mostrar Certificado</button>
                `;
                const showCertificateBtn = quizContainer.querySelector('.show-certificate-btn');
                showCertificateBtn.addEventListener('click', function () {
                    showCertificate(); // Mostrar el certificado
                });
            } else {
                // Mostrar mensaje de no aprobación y botón para volver a cursos
                quizContainer.innerHTML = `
                    <div class="result">Tu puntuación es ${score}/${quiz.questions.length}. No aprobaste el quiz.</div>
                    <button class="back-to-courses-btn">Volver a Cursos</button>
                `;
                const backToCoursesBtn = quizContainer.querySelector('.back-to-courses-btn');
                backToCoursesBtn.addEventListener('click', function () {
                    window.location.href = "courses.html"; // Redirigir a la página de cursos
                });
            }
        }

        // Función para mostrar el certificado
        function showCertificate() {
            const certificateContainer = document.getElementById('certificate-container');
            const username = prompt("Introduce tu nombre para el certificado:");
            while (!username) {
                username = prompt("El nombre no puede estar vacío. Por favor, introduce tu nombre:");
            }
            const courseName = course === 'python' ? 'Python' : 'C++';
            const date = new Date().toLocaleDateString();

            if (username) {
                document.getElementById('username').innerText = username;
                document.getElementById('course-name').innerText = courseName;
                document.getElementById('certificate-date').innerText = date;
                certificateContainer.style.display = 'block'; // Mostrar el contenedor del certificado

                const downloadBtn = document.getElementById('download-certificate-btn');
                downloadBtn.addEventListener('click', function () {
                    downloadCertificate(username, courseName, date); // Descargar el certificado
                });
            }
        }

        // Función para descargar el certificado en formato HTML
        function downloadCertificate(username, courseName, date) {
            // Crear el contenido HTML del certificado con los estilos
            const certificate = `
        <html>
            <head>
                <style>
                    html, body {
                        height: 100%;
                        margin: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: #f0f0f0; /* Color de fondo para la página */
                    }

                    .certificate {
                        width: 800px;
                        height: 600px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        border: 5px solid #333;
                        padding: 20px;
                        font-family: Arial, sans-serif;
                        position: relative;
                    }

                    .certificate h1 {
                        font-size: 36px;
                        margin-bottom: 20px;
                    }
                    .certificate p {
                        font-size: 24px;
                        margin: 10px 0;
                    }
                    .certificate .username, .certificate .course-name {
                        font-weight: bold;
                    }
                    .seal {
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        width: 100px;
                    }
                </style>
            </head>
            <body>
                <div class="certificate">
                    <img src="sello.png" alt="Sello de la Academia" class="seal">
                    <h1>Certificado de Aprobación</h1>
                    <p>Este certificado se otorga a</p>
                    <p class="username">${username}</p>
                    <p>por completar exitosamente el quiz de</p>
                    <p class="course-name">${courseName}</p>
                    <p>Fecha: ${date}</p>
                </div>
            </body>
        </html>
    `;

            // Crear un Blob con el contenido HTML y forzar la descarga
            const blob = new Blob([certificate], { type: 'text/html' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'certificado.html';
            link.click();
        }

        // Renderizar la primera pregunta
        renderQuestion();

        // Configuración del temporizador para el quiz
        const countdownElement = document.getElementById('countdown');
        const redirectBtnContainer = document.getElementById('redirect-btn-container');
        let time = 300; // 2 minutos en segundos

        // Función para actualizar el temporizador
        function updateTimer() {
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;

            countdownElement.textContent =
                `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

            if (time <= 0) {
                clearInterval(timerInterval);
                alert('¡Se acabó el tiempo!');
                // Deshabilitar el botón "Siguiente" y mostrar el botón "Volver a Cursos"
                const nextBtn = quizContainer.querySelector('.next-btn');
                if (nextBtn) {
                    nextBtn.disabled = true;
                }
                redirectBtnContainer.innerHTML = `
                    <a href="courses.html" class="back-to-courses-btn">Volver a Cursos</a>
                `;

                countdownElement.style.display = 'none';
            } else {
                time--;
            }
        }

        // Iniciar el temporizador
        const timerInterval = setInterval(updateTimer, 1000);
    } else {
        quizContainer.innerHTML = '<div>No se encontró el quiz para este curso.</div>';
    }
});
