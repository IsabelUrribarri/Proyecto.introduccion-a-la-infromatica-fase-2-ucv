document.addEventListener("DOMContentLoaded", function() {
    // Selector para el botón de login
    const loginButton = document.querySelector('.login100-form-btn');

    // Evento de clic en el botón de login
    if (loginButton) {
        loginButton.addEventListener('click', function(e) {
            e.preventDefault();  

            // Redirección a la página de cursos
            window.location.href = "courses.html";
        });
    }

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
                }
            ]
        }
    };

    const quizContainer = document.querySelector('.quiz-container');
    const course = new URLSearchParams(window.location.search).get('course');

    if (course && quizzes[course]) {
        const quiz = quizzes[course];
        let score = 0;
        let currentQuestionIndex = 0;

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
            nextBtn.addEventListener('click', function() {
                const selectedOption = quizContainer.querySelector('input[name="option"]:checked');
                if (selectedOption) {
                    const answer = questionObj.type === 'true_false' ? (selectedOption.value === 'true') : parseInt(selectedOption.value);
                    if (answer === questionObj.answer) {
                        score++;
                    }
                    currentQuestionIndex++;
                    if (currentQuestionIndex < quiz.questions.length) {
                        renderQuestion();
                    } else {
                        // Final result screen
                        quizContainer.innerHTML = `
                            <div class="result">Tu puntuación es ${score}/${quiz.questions.length}</div>
                            <button class="back-to-courses-btn">Volver a Cursos</button>
                        `;
                        const backToCoursesBtn = quizContainer.querySelector('.back-to-courses-btn');
                        backToCoursesBtn.addEventListener('click', function() {
                            window.location.href = "courses.html";
                        });

 
                        clearInterval(timerInterval);

                        const nextBtn = quizContainer.querySelector('.next-btn');
                        if (nextBtn) {
                            nextBtn.disabled = true;
                        }
                        countdownElement.style.display = 'none';
                    }
                } else {
                    alert("Por favor selecciona una respuesta");
                }
            });
        }

        renderQuestion();


        const countdownElement = document.getElementById('countdown');
        const redirectBtnContainer = document.getElementById('redirect-btn-container');
        let time = 120; // 2 minutos en segundos

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

        // Actualiza el contador cada segundo
        const timerInterval = setInterval(updateTimer, 1000);
    } else {
        quizContainer.innerHTML = '<div class="error">Curso no encontrado.</div>';
    }
});
