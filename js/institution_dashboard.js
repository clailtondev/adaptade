document.addEventListener('DOMContentLoaded', () => {
    // Configura o botão de sair
    const logoutBtn = document.querySelector('button[onclick="logout()"]');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
});

/**
 * Função para deslogar o usuário e redirecionar para a página inicial.
 */
function logout() {
    localStorage.removeItem('userRole'); // Limpa o perfil do usuário armazenado
    alert('Você foi desconectado(a) da plataforma Adaptado.');
    window.location.href = 'index.html'; // Redireciona para a página de login/seleção de perfil
}

/**
 * Simula a adição de um novo professor.
 */
function addTeacher() {
    const teacherName = prompt("Digite o nome do novo professor:");
    if (teacherName && teacherName.trim() !== "") {
        const teacherList = document.querySelector('.bg-[#0e1a3c] ul'); // Assumindo que é a primeira UL
        const newTeacherItem = document.createElement('li');
        newTeacherItem.classList.add('flex', 'justify-between', 'items-center', 'bg-[#1a2a4f]', 'p-3', 'rounded-lg');
        newTeacherItem.innerHTML = `
            <span>${teacherName}</span>
            <a href="#" class="text-yellow-400 hover:text-yellow-300 text-sm font-semibold" onclick="viewTeacherDetails('${teacherName}')">Ver Detalhes</a>
            <button class="text-red-400 hover:text-red-300 ml-2" title="Remover Professor" onclick="removeUser(this, 'professor')">X</button>
        `;
        teacherList.appendChild(newTeacherItem);
        alert(`Professor(a) "${teacherName}" adicionado(a)!`);
    } else if (teacherName !== null) {
        alert("O nome do professor não pode ser vazio.");
    }
}

/**
 * Simula a visualização de detalhes de um professor.
 * @param {string} teacherName - O nome do professor.
 */
function viewTeacherDetails(teacherName) {
    alert(`Visualizando detalhes de: ${teacherName}. (Funcionalidade de perfil de professor será implementada!)`);
}

/**
 * Simula a adição de um novo psicólogo.
 */
function addPsychologist() {
    const psychologistName = prompt("Digite o nome do novo psicólogo:");
    if (psychologistName && psychologistName.trim() !== "") {
        const psychologistList = document.querySelectorAll('.bg-[#0e1a3c] ul')[1]; // Assumindo que é a segunda UL
        const newPsychologistItem = document.createElement('li');
        newPsychologistItem.classList.add('flex', 'justify-between', 'items-center', 'bg-[#1a2a4f]', 'p-3', 'rounded-lg');
        newPsychologistItem.innerHTML = `
            <span>${psychologistName}</span>
            <a href="#" class="text-yellow-400 hover:text-yellow-300 text-sm font-semibold" onclick="viewPsychologistDetails('${psychologistName}')">Ver Detalhes</a>
            <button class="text-red-400 hover:text-red-300 ml-2" title="Remover Psicólogo" onclick="removeUser(this, 'psicologo')">X</button>
        `;
        psychologistList.appendChild(newPsychologistItem);
        alert(`Psicólogo(a) "${psychologistName}" adicionado(a)!`);
    } else if (psychologistName !== null) {
        alert("O nome do psicólogo não pode ser vazio.");
    }
}

/**
 * Simula a visualização de detalhes de um psicólogo.
 * @param {string} psychologistName - O nome do psicólogo.
 */
function viewPsychologistDetails(psychologistName) {
    alert(`Visualizando detalhes de: ${psychologistName}. (Funcionalidade de perfil de psicólogo será implementada!)`);
}

/**
 * Simula a adição de um novo aluno.
 */
function addStudent() {
    const studentName = prompt("Digite o nome do novo aluno:");
    if (studentName && studentName.trim() !== "") {
        const studentList = document.querySelectorAll('.bg-[#0e1a3c] ul')[2]; // Assumindo que é a terceira UL
        const newStudentItem = document.createElement('li');
        newStudentItem.classList.add('flex', 'justify-between', 'items-center', 'bg-[#1a2a4f]', 'p-3', 'rounded-lg');
        newStudentItem.innerHTML = `
            <span>${studentName}</span>
            <a href="#" class="text-yellow-400 hover:text-yellow-300 text-sm font-semibold" onclick="viewStudentDetails('${studentName}')">Ver Detalhes</a>
            <button class="text-red-400 hover:text-red-300 ml-2" title="Remover Aluno" onclick="removeUser(this, 'aluno')">X</button>
        `;
        studentList.appendChild(newStudentItem);
        alert(`Aluno(a) "${studentName}" adicionado(a)!`);
    } else if (studentName !== null) {
        alert("O nome do aluno não pode ser vazio.");
    }
}

/**
 * Simula a visualização de detalhes de um aluno.
 * @param {string} studentName - O nome do aluno.
 */
function viewStudentDetails(studentName) {
    alert(`Visualizando detalhes de: ${studentName}. (Funcionalidade de perfil de aluno e relatórios será implementada!)`);
}

/**
 * Simula a remoção de um usuário (professor, psicólogo, aluno).
 * @param {HTMLElement} buttonElement - O botão "X" clicado.
 * @param {string} userType - O tipo de usuário ('professor', 'psicologo', 'aluno').
 */
function removeUser(buttonElement, userType) {
    const listItem = buttonElement.closest('li');
    if (listItem) {
        const userName = listItem.querySelector('span').textContent;
        if (confirm(`Tem certeza que deseja remover ${userType} "${userName}"?`)) {
            listItem.remove();
            alert(`${userType} "${userName}" removido.`);
        }
    }
}

/**
 * Simula a geração de um relatório institucional completo.
 */
function generateInstitutionReport() {
    alert('Gerando relatório institucional completo! (Funcionalidade de backend para geração de relatórios será implementada!)');
}
