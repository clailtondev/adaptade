document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 1;

    const steps = document.querySelectorAll('.form-step');
    const mainContainer = document.getElementById('main-container');

    function showStep(stepNum) {
        steps.forEach((step, index) => {
            if (index + 1 === stepNum) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
        currentStep = stepNum;
        // Reset max-width for authentication steps
        mainContainer.classList.add('max-w-lg');
        mainContainer.classList.remove('max-w-4xl');
    }

    function toggleRegistrationFields(role) {
        document.getElementById('student-fields').classList.add('hidden');
        document.getElementById('teacher-fields').classList.add('hidden');
        document.getElementById('psicologo-fields').classList.add('hidden');
        document.getElementById('institution-fields').classList.add('hidden');

        if (role === 'estudante') {
            document.getElementById('student-fields').classList.remove('hidden');
        } else if (role === 'professor') {
            document.getElementById('teacher-fields').classList.remove('hidden');
        } else if (role === 'psicologo') {
            document.getElementById('psicologo-fields').classList.remove('hidden');
        } else if (role === 'instituicao') {
            document.getElementById('institution-fields').classList.remove('hidden');
        }
    }

    // Event Listeners for Step 1 (Role Selection)
    document.querySelectorAll('input[name="role"]').forEach(radio => {
        radio.addEventListener('change', (event) => {
            toggleRegistrationFields(event.target.value);
        });
    });

    document.getElementById('proceed-to-registration').addEventListener('click', () => {
        showStep(2); // Go to Registration Form
    });

    // Event Listeners for Step 2 (Registration Form)
    document.getElementById('back-to-role-selection').addEventListener('click', () => {
        showStep(1); // Go back to Role Selection
    });

    document.getElementById('continue-registration').addEventListener('click', () => {
        // Here, you would collect data from the registration fields
        // and perform validation before proceeding to password or finalization.
        // For demo, we'll just move to the next step.
        showStep(3); // Go to Password Definition
    });

    document.getElementById('go-to-login').addEventListener('click', () => {
        showStep(4); // Go to Login Form
    });

    // Event Listeners for Step 3 (Password Definition)
    document.getElementById('back-to-registration-form').addEventListener('click', () => {
        showStep(2); // Go back to Registration Form
    });

    document.getElementById('finalize-registration').addEventListener('click', () => {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const selectedRole = document.querySelector('input[name="role"]:checked').value;

        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }
        if (password.length < 6) { // Example validation
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        // Simulate sending data to backend
        alert(`Cadastro de ${selectedRole} finalizado com sucesso!`);

        // Store selected role in localStorage for redirection after login
        localStorage.setItem('userRole', selectedRole);

        // Redirect based on role after successful registration
        if (selectedRole === 'estudante') {
            window.location.href = 'student_anamnesis.html'; // Redirect to anamnesis for students
        } else if (selectedRole === 'professor') {
            window.location.href = 'teacher_dashboard.html'; // Redirect to teacher dashboard
        } else if (selectedRole === 'psicologo') {
            window.location.href = 'psychologist_dashboard.html'; // Redirect to psychologist dashboard
        } else if (selectedRole === 'instituicao') {
            window.location.href = 'institution_dashboard.html'; // Redirect to institution dashboard
        }
    });

    document.getElementById('go-to-login-from-password').addEventListener('click', () => {
        showStep(4); // Go to Login Form
    });

    // Event Listeners for Step 4 (Login Form)
    document.getElementById('back-to-registration').addEventListener('click', () => {
        showStep(2); // Go back to Registration Form
    });

    document.getElementById('handle-login').addEventListener('click', () => {
        const loginEmail = document.getElementById('login-email').value;
        const loginPassword = document.getElementById('login-password').value;

        // In a real application, you'd send these credentials to a backend for verification.
        // For this demo, let's simulate successful login and redirect based on a dummy role.
        // For actual implementation, the backend would return the user's role.

        // Simulating login logic:
        let simulatedRole;
        if (loginEmail.includes('@aluno.com')) {
            simulatedRole = 'estudante';
        } else if (loginEmail.includes('@professor.com')) {
            simulatedRole = 'professor';
        } else if (loginEmail.includes('@psicologo.com')) {
            simulatedRole = 'psicologo';
        } else if (loginEmail.includes('@instituicao.com')) {
            simulatedRole = 'instituicao';
        } else {
            alert('Email ou senha inválidos. Tente novamente.');
            return;
        }

        alert(`Login para ${loginEmail} realizado com sucesso como ${simulatedRole}!`);
        localStorage.setItem('userRole', simulatedRole); // Store role for next page

        // Redirect based on the simulated role
        if (simulatedRole === 'estudante') {
            // Check if anamnesis needs to be completed for the student
            // For demo, always go to anamnesis first if it's the student role
            window.location.href = 'student_anamnesis.html';
        } else if (simulatedRole === 'professor') {
            window.location.href = 'teacher_dashboard.html';
        } else if (simulatedRole === 'psicologo') {
            window.location.href = 'psychologist_dashboard.html';
        } else if (simulatedRole === 'instituicao') {
            window.location.href = 'institution_dashboard.html';
        }
    });

    document.getElementById('go-to-register').addEventListener('click', () => {
        showStep(1); // Go back to role selection to initiate registration
    });

    // Initialize the first step
    showStep(currentStep);
    toggleRegistrationFields(document.querySelector('input[name="role"]:checked').value);
});