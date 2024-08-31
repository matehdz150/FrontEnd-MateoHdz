
document.addEventListener('DOMContentLoaded', () => {
    emailjs.init('tmzBWFG1bOgaFCe0G');

    fetch('./assets/info.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('nombre')?.textContent = data.name;
            document.getElementById('pSpan1')?.textContent = data.sections[0].content.greeting;
            document.getElementById('pSpan2')?.textContent = data.sections[0].content.profession;
            document.getElementById('pSpan3')?.textContent = data.sections[0].content.description;
            document.getElementById('pAddInfo')?.textContent = data.sections[0].content.additionalInfo;

            document.getElementById('sNacimiento')?.textContent = 'Naci el ' + data.sections[1].content.birthdate + 'tengo ' + data.sections[1].content.age + ' años';
            document.getElementById('sLocation')?.textContent = 'Vivo en ' + data.sections[1].content.location;
            document.getElementById('sEducation')?.textContent = 'Estudio en el ' + data.sections[1].content.education.institution + ' voy en ' + data.sections[1].content.education.semester;
            document.getElementById('sEducation2')?.textContent = 'Estoy estudiando ' + data.sections[1].content.education.degree;

            document.getElementById('estudiosTitle')?.textContent = data.sections[2].sectionTitle;
            document.getElementById('colegio')?.textContent = data.sections[2].content.school;

            document.getElementById('skill1')?.textContent = data.sections[3].content.skills[0];
            document.getElementById('skill2')?.textContent = data.sections[3].content.skills[1];
            document.getElementById('skill3')?.textContent = data.sections[3].content.skills[2];
            document.getElementById('skill4')?.textContent = data.sections[3].content.skills[3];
            document.getElementById('skill5')?.textContent = data.sections[3].content.skills[4];
            document.getElementById('tec1')?.textContent = data.sections[3].content.technologies.WebDesign[0];
            document.getElementById('tec2')?.textContent = data.sections[3].content.technologies.WebDesign[1];
            document.getElementById('tec3')?.textContent = data.sections[3].content.technologies.WebDesign[2];
            document.getElementById('tec4')?.textContent = data.sections[3].content.technologies.Frameworks[0];
            document.getElementById('tec5')?.textContent = data.sections[3].content.technologies.Frameworks[1];
            document.getElementById('tec6')?.textContent = data.sections[3].content.technologies.Frameworks[2];
            document.getElementById('tec7')?.textContent = data.sections[3].content.technologies.BackEnd[0];
            document.getElementById('tec8')?.textContent = data.sections[3].content.technologies.BackEnd[1];
            document.getElementById('tec9')?.textContent = data.sections[3].content.technologies.BackEnd[2];

            document.getElementById('pasatiemposTitle')?.textContent = data.sections[4].sectionTitle;
            document.getElementById('hobby1')?.textContent = 'Me gusta mucho ' + data.sections[4].content.hobbies[0];
            document.getElementById('hobby2')?.textContent = data.sections[4].content.hobbies[1];
            document.getElementById('hobby3')?.textContent = data.sections[4].content.hobbies[2];
            document.getElementById('hobby4')?.textContent = 'Me gusta el ' + data.sections[4].content.hobbies[3];


        })
        .catch(error => console.error('Error loading JSON:', error));

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;

        emailjs.send("service_wbi1wlb", "template_t68end9", {
            name: name,
            description: description
        })
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Correo enviado exitosamente!');
            }, function (error) {
                console.log('FAILED...', error);
                alert('Error al enviar el correo.');
            });
    });
});
