/*
    mtlt "hadda howa li taykhli les icons dyal social media khdain ,easy"
    .
    .
    .
    .
*/
function facebookOpen1() {
    window.open("https://www.facebook.com/mohamed.abualine");
}
/*
    mtlt "hadda howa lbutton get started khdam o kaydina l our services !!!!! ,easy"
    .
    .
    .
    .
*/
function gotoservice() {
    location.href ="#ourservicespage";
}
/*
    mtlt "hadda taykhli les icons it7rko bwa7d transition 1s par defaut"
    .
    .
    .
    .
*/
var counter =1;
setInterval(function(){
    document.getElementById('radio' + counter).checked =true;
    counter++;
    if(counter > 15){
        counter = 1;
    }
},5000);
/*
    mtlt hadda howa li kaykhli msg imchi auto lemail li 7titi par defaut
    .
    .
    .
    .
 */
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "maboualine@gmail.com",
        Password : "*************",
        To : 'maboualine@gmail.com',
        From : document.getElementById("EmailOfClientAsk").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("NameOfClientAsk").value
        + "<br> Email: " + document.getElementById("EmailOfClientAsk").value
        + "<br> Subject: " + document.getElementById("SubjectOfClientAsk").value
        + "<br> Message: " + document.getElementById("MessageOfClientAsk").value
    }).then(
      message => alert("Message Sent Succesfully")
    );
}
/*
    mtlt hadda howa li kaykhli nav bar tbdl position m3a scroll !!!
    .
    .
    .
    .
 */
window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});
/*
    mtlt hadda howa li kaykhli h2 ob3d les éléments idiro animation m3a scroll !!!
    .
    .
    .
    .
*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        /* ila knt baghi haddik lanimation tkoooon hir mra we7da machi kol mrra ghatb9a t3awd wghatji basla !!! sinon 7ydha
        else{
            entry.target.classList.remove('show');
        }
        */
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry);
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//             // Change the text of the span
//             const span = entry.target.querySelector('#spin');
//             changeSpanText(span);
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));


// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             handleIntersection(entry.target);
//             entry.target.classList.add('show');
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));

// function handleIntersection(element) {
//     // Check if the element is the span you want to modify
//     if (element.id === 'spin') {
//         // Change the text of the span
//         element.textContent = 'New text for the span';
//     } else {
//         // Handle other elements or sections here
//         // Modify their content or perform other actions
//     }
// }


// function handleIntersection(span) {
//     // Check if the element is the span you want to modify
//     if (span.id === 'spin') {
//         // Change the text of the span
//         span.textContent = 'New text for the span';
//     } else {
//         // Handle other elements or sections here
//         // Modify their content or perform other actions
//     }
// }
// const span = document.getElementById('spin');
// handleIntersection(span);




// function changeSpanText(span) {
//     const texts = [
//         "awdi hadchi li kandiro hrban bquality hrbana sara7a !!!!",
//         "anna khdam hna 5ans haddi o sara7a ma3mr chi client tchka ola chi la3ba ,l2omor mdbota!!!",
//         // Add other texts for animation
//     ];

//     let currentTextIndex = 0;

//     function updateText() {
//         span.textContent = texts[currentTextIndex];
//         currentTextIndex = (currentTextIndex + 1) % texts.length;
//     }

//     // Initial text update
//     updateText();

//     // Update text every 40 seconds (same as the original animation)
//     setInterval(updateText, 40000);
// }


// const span = document.getElementById('spin');

// function updateSpanText() {
//     const texts = [
//         "New text 1",
//         "New text 2",
//         // Add other texts for animation
//     ];

//     let currentTextIndex = 0;

//     function updateText() {
//         span.dataset.text = texts[currentTextIndex];
//         currentTextIndex = (currentTextIndex + 1) % texts.length;
//     }

//     // Initial text update
//     updateText();

//     // Update text every 40 seconds (same as the original animation)
//     setInterval(updateText, 40000);
// }

// // Call the function to start updating the span's content
// updateSpanText();


const spin = document.getElementById('spin');

function changeText() {
    const texts = [
        "First text",
        "Second text",
        "Third text",
        // Add more texts here
    ];

    let index = 0;

    function updateText() {
        spin.innerText = texts[index];
        index = (index + 1) % texts.length;
    }

    updateText();

    setInterval(updateText, 40000);  // Update text every 40 seconds
}

changeText();




/*
    mtlt hadda howa li kaykhli les divisions li fihom les card ibano mn b3d click 3la les btns !!!
    .
    .
    .
    .
*/
var buttonCadeaux = document.getElementById("btn-cdx");
var buttonPublicité = document.getElementById("btn-pbs");
var buttonDécoration = document.getElementById("btn-dcr");
var sectionourservicespage = document.getElementById("ourservicespage");
var divservices = document.getElementById("services-informations");
var divCadeaux = document.getElementById("mkhbi1");
var divPublicité = document.getElementById("mkhbi2");
var divDécoration = document.getElementById("mkhbi3");
var btncdx = document.getElementById("btn-cdx");
var btnpbs = document.getElementById("btn-pbs");
var btndcr = document.getElementById("btn-dcr");
    buttonCadeaux.addEventListener("click", () => {
        sectionourservicespage.style.height='auto';
        buttonCadeaux.style.backgroundColor='rgb(40, 36, 36)';
        buttonPublicité.style.backgroundColor='rgb(242, 200, 59)';
        buttonDécoration.style.backgroundColor='rgb(242, 200, 59)';
        divCadeaux.style.display='block';
        divPublicité.style.display='none';
        divDécoration.style.display='none';
        divservices.style.display='none';
    });
    buttonPublicité.addEventListener("click", () => {
        sectionourservicespage.style.height='auto';    
        buttonPublicité.style.backgroundColor='rgb(40, 36, 36)';
        buttonCadeaux.style.backgroundColor='rgb(242, 200, 59)';
        buttonDécoration.style.backgroundColor='rgb(242, 200, 59)';
        divCadeaux.style.display='none';
        divPublicité.style.display='block';
        divDécoration.style.display='none';
        divservices.style.display='none';
    });
    buttonDécoration.addEventListener("click", () => {
        sectionourservicespage.style.height='auto';    
        buttonPublicité.style.backgroundColor='rgb(242, 200, 59)';
        buttonCadeaux.style.backgroundColor='rgb(242, 200, 59)';
        buttonDécoration.style.backgroundColor='rgb(40, 36, 36)';
        divCadeaux.style.display='none';
        divPublicité.style.display='none';
        divDécoration.style.display='block';
        divservices.style.display='none';
    });
/*
    mtlt hadda howa li kaykhli search bar tdir filter lproducts !!!
    .
    .
    .
    .
*/
const searchInput = document.getElementById('rechercher');
searchInput.addEventListener('input', search);

function search() {
    let filter = document.getElementById('rechercher').value.toUpperCase();
    let items = document.querySelectorAll('.card-produit');

    items.forEach(item => {
        let titleElement = item.querySelector('.titre-produit');
        let title = titleElement.textContent || titleElement.innerText;

        if (title.toUpperCase().indexOf(filter) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}
/*
    mtlt hadda howa li kaykhli theme itbdl !!!
    .
    .
    .
    .
*/
    const themeSelect = document.getElementById('theme');
    //body
    const bodytheme = document.querySelector("body");
    // header
    const headerFullImage = document.querySelector("#full-image-header");
    // home page
    const homemood = document.querySelector(".home-page");
    const homedescription = document.querySelector("#description1");
    const homePagebBtn = document.querySelector("#home-page_btn");
    // services page
    const servicesmood = document.querySelector(".our_services-page");
    const servicesdescription = document.querySelector("#os-desc");
    const servicespre1 = document.querySelector("#servicespre1");
    const servicespre2 = document.querySelector("#servicespre2");
    const servicespre3 = document.querySelector("#servicespre3");
    const servicespre4 = document.querySelector("#servicespre4");
    const servicespre5 = document.querySelector("#servicespre5");
    const servicespre6 = document.querySelector("#servicespre6");
    const servicespre7 = document.querySelector("#servicespre7");
    const servicespre8 = document.querySelector("#servicespre8");
    const servicespre9 = document.querySelector("#servicespre9");
    const servicespre10 = document.querySelector("#servicespre10");
    const servicespre11 = document.querySelector("#servicespre11");
    const servicespre12 = document.querySelector("#servicespre12");
    const servicespre13 = document.querySelector("#servicespre13");
    const servicespre14 = document.querySelector("#servicespre14");
    const servicespre15 = document.querySelector("#servicespre15");
    const servicesVline2 = document.querySelector("#verticale-line2");
    const servicesVline3 = document.querySelector("#verticale-line3");
    const servicesVline4 = document.querySelector("#verticale-line4");
    /*card-services*/
    const servicescards = document.querySelector("#card-produit");
    const servicescards2 = document.querySelector("#card-produit2");
    const servicescards3 = document.querySelector("#card-produit3");
    const servicescards4 = document.querySelector("#card-produit4");
    const servicescards5 = document.querySelector("#card-produit5");
    const servicescards6 = document.querySelector("#card-produit6");
    const servicescards7 = document.querySelector("#card-produit7");
    const servicescards8 = document.querySelector("#card-produit8");
    const servicescards9 = document.querySelector("#card-produit9");
    const servicescards10 = document.querySelector("#card-produit10");
    const servicescards11 = document.querySelector("#card-produit11");
    const servicescards12 = document.querySelector("#card-produit12");
    const servicescards13 = document.querySelector("#card-produit13");
    const servicescards14 = document.querySelector("#card-produit14");
    const servicescards15 = document.querySelector("#card-produit15");
    const servicescards16 = document.querySelector("#card-produit16");
    const servicescards17 = document.querySelector("#card-produit17");
    const servicescards18 = document.querySelector("#card-produit18");
    const servicescards19 = document.querySelector("#card-produit19");
    const servicescards20 = document.querySelector("#card-produit20");
    const servicescards21 = document.querySelector("#card-produit21");
    const servicescards22 = document.querySelector("#card-produit22");
    const servicescards23 = document.querySelector("#card-produit23");
    const servicescards24 = document.querySelector("#card-produit24");
    const servicescards25 = document.querySelector("#card-produit25");
    const servicescards26 = document.querySelector("#card-produit26");
    const servicescards27 = document.querySelector("#card-produit27");
    const servicescards28 = document.querySelector("#card-produit28");
    const servicescards29 = document.querySelector("#card-produit29");
    const servicescards30 = document.querySelector("#card-produit30");
    const servicescards31 = document.querySelector("#card-produit31");
    const servicescards32 = document.querySelector("#card-produit32");
    const servicescards33 = document.querySelector("#card-produit33");
    const servicescards34 = document.querySelector("#card-produit34");
    const servicescards35 = document.querySelector("#card-produit35");
    const servicescards36 = document.querySelector("#card-produit36");
    /*end card-services*/
    /*titre-services*/
    const servicesTitreProduit = document.querySelector("#titre-produit");
    const servicesTitreProduit2 = document.querySelector("#titre-produit2");
    const servicesTitreProduit3 = document.querySelector("#titre-produit3");
    const servicesTitreProduit4 = document.querySelector("#titre-produit4");
    const servicesTitreProduit5 = document.querySelector("#titre-produit5");
    const servicesTitreProduit6 = document.querySelector("#titre-produit6");
    const servicesTitreProduit7 = document.querySelector("#titre-produit7");
    const servicesTitreProduit8 = document.querySelector("#titre-produit8");
    const servicesTitreProduit9 = document.querySelector("#titre-produit9");
    const servicesTitreProduit10 = document.querySelector("#titre-produit10");
    const servicesTitreProduit11 = document.querySelector("#titre-produit11");
    const servicesTitreProduit12 = document.querySelector("#titre-produit12");
    const servicesTitreProduit13 = document.querySelector("#titre-produit13");
    const servicesTitreProduit14 = document.querySelector("#titre-produit14");
    const servicesTitreProduit15 = document.querySelector("#titre-produit15");
    const servicesTitreProduit16 = document.querySelector("#titre-produit16");
    const servicesTitreProduit17 = document.querySelector("#titre-produit17");
    const servicesTitreProduit18 = document.querySelector("#titre-produit18");
    const servicesTitreProduit19 = document.querySelector("#titre-produit19");
    const servicesTitreProduit20 = document.querySelector("#titre-produit20");
    const servicesTitreProduit21 = document.querySelector("#titre-produit21");
    const servicesTitreProduit22 = document.querySelector("#titre-produit22");
    const servicesTitreProduit23 = document.querySelector("#titre-produit23");
    const servicesTitreProduit24 = document.querySelector("#titre-produit24");
    const servicesTitreProduit25 = document.querySelector("#titre-produit25");
    const servicesTitreProduit26 = document.querySelector("#titre-produit26");
    const servicesTitreProduit27 = document.querySelector("#titre-produit27");
    const servicesTitreProduit28 = document.querySelector("#titre-produit28");
    const servicesTitreProduit29 = document.querySelector("#titre-produit29");
    const servicesTitreProduit30 = document.querySelector("#titre-produit30");
    const servicesTitreProduit31 = document.querySelector("#titre-produit31");
    const servicesTitreProduit32 = document.querySelector("#titre-produit32");
    const servicesTitreProduit33 = document.querySelector("#titre-produit33");
    const servicesTitreProduit34 = document.querySelector("#titre-produit34");
    const servicesTitreProduit35 = document.querySelector("#titre-produit35");
    const servicesTitreProduit36 = document.querySelector("#titre-produit36");
    /*end titre-services*/
    /*desc-services*/
    const servicesDescProduit = document.querySelectorAll(".desc-produit");
    // clients page
    const clientsmood = document.querySelector(".our_client-page");
    const clientsParadesc = document.querySelector("#ocdesc");
    let clientsCommentsShadow = document.querySelector(".our_client-page_passing-comments2");
    let afterpseudo = window.getComputedStyle(clientsCommentsShadow ,'::after');
    // about-us page
    const aboutmood = document.querySelector(".about_us-page");
    const aboutUsDesc = document.querySelector("#audesc");
    const aboutUsBack1 = document.querySelector("#about_us-page_img-description1");
    const aboutUsBack2 = document.querySelector("#about_us-page_img-description2");
    // our-team page
    const teammood = document.querySelector(".our_team-page");
    const teamdesc = document.querySelector("#otdesc");
    const teamcard1 = document.querySelector("#otidFirstCard");
    const teamOtidName1 = document.querySelector("#otidName1");
    const teamOtidIcomment1 = document.querySelector("#otid-opacity-p1");
    const teamOtidIcons1 = document.querySelector("#otdi-i1");
    const teamcard2 = document.querySelector("#otidFirstCard2");
    const teamOtidName2 = document.querySelector("#otidName2");
    const teamOtidIcomment2 = document.querySelector("#otid-opacity-p2");
    const teamOtidIcons2 = document.querySelector("#otdi-i2");
    const teamcard3 = document.querySelector("#otidFirstCard3");
    const teamOtidName3 = document.querySelector("#otidName3");
    const teamOtidIcomment3 = document.querySelector("#otid-opacity-p3");
    const teamOtidIcons3 = document.querySelector("#otdi-i3");
    // why-us page
    const whymood = document.querySelector(".why_us-page");
    const whyspin = document.querySelector("#spin2");
    let whyiconsshadow = document.querySelector("#why_us-page_row1_why2");
    let beforpseudo = window.getComputedStyle(whyiconsshadow ,'::after');
    // contact page
    const contactmood = document.querySelector(".contact_us-page");
    const contactUsnbr1 = document.querySelector("#cunbr1");
    const contactUsnbr2 = document.querySelector("#cunbr2");
    const contactUsverticalLine1 = document.querySelector("#verticale-line5");
    const contactUstext1 = document.querySelector("#cutext1");
    const contactUsverticalLine2 = document.querySelector("#verticale-line6");
    const contactUstext2 = document.querySelector("#cutext2");
    const contactUsfollowus = document.querySelector("#cufollowus");
    // footer
    const footermood = document.querySelector("footer");
    const footernav1 = document.querySelector("#ftrnav1");
    const footernav2 = document.querySelector("#ftrnav2");
    const footernav3 = document.querySelector("#ftrnav3");
    const footernav4 = document.querySelector("#ftrnav4");
    const footernav5 = document.querySelector("#ftrnav5");
    const footernav6 = document.querySelector("#ftrnav6");
    const footernav7 = document.querySelector("#ftrnav7");

    themeSelect.addEventListener('change', function () {
        const selectedTheme = themeSelect.value;
        applyTheme(selectedTheme);
    });

    themeSelect.addEventListener('change', function () {
        const selectedTheme = themeSelect.value;
        applyTheme(selectedTheme);
    });
    
    // Add event listeners for mouseover and mouseout for the home page button
    homePagebBtn.addEventListener('mouseover', function() {
        homePageButtonHover(true);
    });
    
    homePagebBtn.addEventListener('mouseout', function() {
        homePageButtonHover(false);
    });
    
    function homePageButtonHover(isMouseOver) {
        if (isMouseOver) {
            homePagebBtn.style.color = 'rgb(28, 26, 26)';
            homePagebBtn.style.backgroundColor = 'rgb(242, 200, 59)';
        } else {
            homePagebBtn.style.color = 'rgb(242, 200, 59)';
            homePagebBtn.style.backgroundColor = 'transparent';
        }
    }
    
    function applyTheme(theme) {
        console.log('Applying theme:', theme);
        if (theme === 'Dark') {
            //body
            bodytheme.style.backgroundColor = 'rgb(40, 36, 36)';
            // header
            headerFullImage.src ='images/Work_Area-B&W.jpg';
            // home page
            homemood.style.backgroundColor = 'rgb(28, 26, 26)';
            homedescription.style.color = 'whitesmoke';
            homePagebBtn.style.border = '1px solid rgb(242, 200, 59)';

            homePageButtonHover(false); // Reset button styles

            //clients page
            clientsmood.style.backgroundColor = 'rgb(28, 26, 26)';
            clientsParadesc.style.color = 'whitesmoke';
            clientsCommentsShadow.style.setProperty('--after1', 'linear-gradient(to right, rgb(28, 26, 26) 0%, rgba(255,255,255,0) 100%)');

            //about us page
            aboutmood.style.backgroundColor = 'rgb(40, 36, 36)';
            aboutUsDesc.style.color = 'white';
            aboutUsBack1.style.backgroundColor = 'rgb(40, 36, 36)';
            aboutUsBack2.style.backgroundColor = 'rgb(40, 36, 36)';

            //our team page
            teammood.style.backgroundColor = 'rgb(28, 26, 26)';
            teamdesc.style.color = 'whitesmoke';
            teamcard1.style.backgroundColor = 'rgb(40, 36, 36)';
            teamcard1.style.border = '1px solid rgb(40, 36, 36)';
            teamOtidName1.style.color = 'whitesmoke';
            teamOtidIcons1.style.color = 'whitesmoke';
            teamOtidIcomment1.style.color = 'whitesmoke';
            teamcard2.style.backgroundColor = 'rgb(40, 36, 36)';
            teamcard2.style.border = '1px solid rgb(40, 36, 36)';
            teamOtidName2.style.color = 'whitesmoke';
            teamOtidIcons2.style.color = 'whitesmoke';
            teamOtidIcomment2.style.color = 'whitesmoke';
            teamcard3.style.backgroundColor = 'rgb(40, 36, 36)';
            teamcard3.style.border = '1px solid rgb(40, 36, 36)';
            teamOtidName3.style.color = 'whitesmoke';
            teamOtidIcons3.style.color = 'whitesmoke';
            teamOtidIcomment3.style.color = 'whitesmoke';

            //why us page
            whymood.style.backgroundColor = 'rgb(40, 36, 36)';
            whyspin.style.color = 'whitesmoke';
            whyiconsshadow.style.setProperty('--befor', 'linear-gradient(to bottom, rgb(40, 36, 36) 0%, rgba(255,255,255,0) 100%)');

            //contact us page
            contactmood.style.backgroundColor = 'rgb(28, 26, 26)';
            contactUsnbr1.style.color = 'whitesmoke';
            contactUsnbr2.style.color = 'whitesmoke';
            contactUsverticalLine1.style.backgroundColor = 'whitesmoke';
            contactUsverticalLine2.style.backgroundColor = 'whitesmoke';
            contactUstext1.style.color = 'whitesmoke';
            contactUstext2.style.color = 'whitesmoke';
            contactUsfollowus.style.color = 'whitesmoke';

            //footer
            footermood.style.backgroundColor = 'rgb(40, 36, 36)';
            footernav1.style.color = 'rgb(180, 176, 176)';
            footernav2.style.color = 'rgb(180, 176, 176)';
            footernav3.style.color = 'rgb(180, 176, 176)';
            footernav4.style.color = 'rgb(180, 176, 176)';
            footernav5.style.color = 'rgb(180, 176, 176)';
            footernav6.style.color = 'rgb(180, 176, 176)';
            footernav7.style.color = 'rgb(180, 176, 176)';

            //services nav buttons
            buttonCadeaux.addEventListener("click", () => {
                sectionourservicespage.style.height='auto';
                buttonCadeaux.style.backgroundColor='rgb(40, 36, 36)';
                buttonPublicité.style.backgroundColor='rgb(242, 200, 59)';
                buttonDécoration.style.backgroundColor='rgb(242, 200, 59)';
                btncdx.style.color='white';
                btnpbs.style.color='white';
                btndcr.style.color='white';
                divCadeaux.style.display='block';
                divPublicité.style.display='none';
                divDécoration.style.display='none';
                divservices.style.display='none';
            });
            buttonPublicité.addEventListener("click", () => {
                sectionourservicespage.style.height='auto';    
                buttonPublicité.style.backgroundColor='rgb(40, 36, 36)';
                buttonCadeaux.style.backgroundColor='rgb(242, 200, 59)';
                buttonDécoration.style.backgroundColor='rgb(242, 200, 59)';
                btncdx.style.color='white';
                btnpbs.style.color='white';
                btndcr.style.color='white';
                divCadeaux.style.display='none';
                divPublicité.style.display='block';
                divDécoration.style.display='none';
                divservices.style.display='none';
            });
            buttonDécoration.addEventListener("click", () => {
                sectionourservicespage.style.height='auto';    
                buttonPublicité.style.backgroundColor='rgb(242, 200, 59)';
                buttonCadeaux.style.backgroundColor='rgb(242, 200, 59)';
                buttonDécoration.style.backgroundColor='rgb(40, 36, 36)';
                btncdx.style.color='white';
                btnpbs.style.color='white';
                btndcr.style.color='white';
                divCadeaux.style.display='none';
                divPublicité.style.display='none';
                divDécoration.style.display='block';
                divservices.style.display='none';
            });

            // services page
            servicesmood.style.backgroundColor = 'rgb(40, 36, 36)';
            servicesdescription.style.color = 'whitesmoke';
            servicespre1.style.color = 'whitesmoke';
            servicespre2.style.color = 'whitesmoke';
            servicespre3.style.color = 'whitesmoke';
            servicespre4.style.color = 'whitesmoke';
            servicespre5.style.color = 'whitesmoke';
            servicespre6.style.color = 'whitesmoke';
            servicespre7.style.color = 'whitesmoke';
            servicespre8.style.color = 'whitesmoke';
            servicespre9.style.color = 'whitesmoke';
            servicespre10.style.color = 'whitesmoke';
            servicespre11.style.color = 'whitesmoke';
            servicespre12.style.color = 'whitesmoke';
            servicespre13.style.color = 'whitesmoke';
            servicespre14.style.color = 'whitesmoke';
            servicespre15.style.color = 'whitesmoke';
            servicesVline2.style.backgroundColor = 'whitesmoke';
            servicesVline3.style.backgroundColor = 'whitesmoke';
            servicesVline4.style.backgroundColor = 'whitesmoke';
            servicescards.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards2.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards3.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards4.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards5.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards6.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards7.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards8.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards9.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards10.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards11.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards12.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards13.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards14.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards15.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards16.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards17.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards18.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards19.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards20.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards21.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards22.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards23.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards24.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards25.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards26.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards27.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards28.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards29.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards30.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards31.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards32.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards33.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards34.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards35.style.backgroundColor = 'rgb(28, 26, 26)';
            servicescards36.style.backgroundColor = 'rgb(28, 26, 26)';
            servicesTitreProduit.style.color = 'whitesmoke';
            servicesTitreProduit2.style.color = 'whitesmoke';
            servicesTitreProduit3.style.color = 'whitesmoke';
            servicesTitreProduit4.style.color = 'whitesmoke';
            servicesTitreProduit5.style.color = 'whitesmoke';
            servicesTitreProduit6.style.color = 'whitesmoke';
            servicesTitreProduit7.style.color = 'whitesmoke';
            servicesTitreProduit8.style.color = 'whitesmoke';
            servicesTitreProduit9.style.color = 'whitesmoke';
            servicesTitreProduit10.style.color = 'whitesmoke';
            servicesTitreProduit11.style.color = 'whitesmoke';
            servicesTitreProduit12.style.color = 'whitesmoke';
            servicesTitreProduit13.style.color = 'whitesmoke';
            servicesTitreProduit14.style.color = 'whitesmoke';
            servicesTitreProduit15.style.color = 'whitesmoke';
            servicesTitreProduit16.style.color = 'whitesmoke';
            servicesTitreProduit17.style.color = 'whitesmoke';
            servicesTitreProduit18.style.color = 'whitesmoke';
            servicesTitreProduit19.style.color = 'whitesmoke';
            servicesTitreProduit20.style.color = 'whitesmoke';
            servicesTitreProduit21.style.color = 'whitesmoke';
            servicesTitreProduit22.style.color = 'whitesmoke';
            servicesTitreProduit23.style.color = 'whitesmoke';
            servicesTitreProduit24.style.color = 'whitesmoke';
            servicesTitreProduit25.style.color = 'whitesmoke';
            servicesTitreProduit26.style.color = 'whitesmoke';
            servicesTitreProduit27.style.color = 'whitesmoke';
            servicesTitreProduit28.style.color = 'whitesmoke';
            servicesTitreProduit29.style.color = 'whitesmoke';
            servicesTitreProduit30.style.color = 'whitesmoke';
            servicesTitreProduit31.style.color = 'whitesmoke';
            servicesTitreProduit32.style.color = 'whitesmoke';
            servicesTitreProduit33.style.color = 'whitesmoke';
            servicesTitreProduit34.style.color = 'whitesmoke';
            servicesTitreProduit35.style.color = 'whitesmoke';
            servicesTitreProduit36.style.color = 'whitesmoke';
            servicesDescProduit.style.color = 'whitesmoke';

        } else if (theme === 'Light') {
            //body
            bodytheme.style.backgroundColor = 'white';
            // header
            headerFullImage.src ='images/Work_Area.jpg';
            // home page
            homemood.style.backgroundColor = 'whitesmoke';
            homedescription.style.color = 'rgb(28, 26, 26)';
            homePagebBtn.style.color = 'rgb(28, 26, 26)';
            homePagebBtn.style.border = '1px solid rgb(28, 26, 26)';

            homePageButtonHover(false); // Reset button styles

            //clients page
            clientsmood.style.backgroundColor = 'whitesmoke';
            clientsParadesc.style.color = 'rgb(28, 26, 26)';
            clientsCommentsShadow.style.setProperty('--after1', 'linear-gradient(to right, whitesmoke 0%, rgba(255,255,255,0) 100%)');

            //about us page
            aboutmood.style.backgroundColor = 'white';
            aboutUsDesc.style.color = 'rgb(40, 36, 36)';
            aboutUsBack1.style.backgroundColor = 'white';
            aboutUsBack2.style.backgroundColor = 'white';

            //our team page
            teammood.style.backgroundColor = 'whitesmoke';
            teamdesc.style.color = 'rgb(28, 26, 26)';
            teamcard1.style.backgroundColor = 'white';
            teamcard1.style.border = '1px solid white';
            teamOtidName1.style.color = 'rgb(28, 26, 26)';
            teamOtidIcons1.style.color = 'rgb(28, 26, 26)';
            teamOtidIcomment1.style.color = 'rgb(28, 26, 26)';
            teamcard2.style.backgroundColor = 'white';
            teamcard2.style.border = '1px solid white';
            teamOtidName2.style.color = 'rgb(28, 26, 26)';
            teamOtidIcons2.style.color = 'rgb(28, 26, 26)';
            teamOtidIcomment2.style.color = 'rgb(28, 26, 26)';
            teamcard3.style.backgroundColor = 'white';
            teamcard3.style.border = '1px solid white';
            teamOtidName3.style.color = 'rgb(28, 26, 26)';
            teamOtidIcons3.style.color = 'rgb(28, 26, 26)';
            teamOtidIcomment3.style.color = 'rgb(28, 26, 26)';

            //why us page
            whymood.style.backgroundColor = 'white';
            whyspin.style.color = 'rgb(28, 26, 26)';
            whyiconsshadow.style.setProperty('--befor', 'linear-gradient(to bottom, white 0%, rgba(255,255,255,0) 100%)');

            //contact us page
            contactmood.style.backgroundColor = 'whitesmoke';
            contactUsnbr1.style.color = 'rgb(40, 36, 36)';
            contactUsnbr2.style.color = 'rgb(40, 36, 36)';
            contactUsverticalLine1.style.backgroundColor = 'rgb(40, 36, 36)';
            contactUsverticalLine2.style.backgroundColor = 'rgb(40, 36, 36)';
            contactUstext1.style.color = 'rgb(40, 36, 36)';
            contactUstext2.style.color = 'rgb(40, 36, 36)';
            contactUsfollowus.style.color = 'rgb(40, 36, 36)';

            //footer
            footermood.style.backgroundColor = 'white';
            footernav1.style.color = 'rgb(40, 36, 36)';
            footernav2.style.color = 'rgb(40, 36, 36)';
            footernav3.style.color = 'rgb(40, 36, 36)';
            footernav4.style.color = 'rgb(40, 36, 36)';
            footernav5.style.color = 'rgb(40, 36, 36)';
            footernav6.style.color = 'rgb(40, 36, 36)';
            footernav7.style.color = 'rgb(40, 36, 36)';

            //services nav buttons
            buttonCadeaux.addEventListener("click", () => {
                sectionourservicespage.style.height='auto';
                buttonCadeaux.style.backgroundColor='white';
                buttonPublicité.style.backgroundColor='rgb(242, 200, 59)';
                buttonDécoration.style.backgroundColor='rgb(242, 200, 59)';
                btncdx.style.color='rgb(40, 36, 36)';
                btnpbs.style.color='white';
                btndcr.style.color='white';
                divCadeaux.style.display='block';
                divPublicité.style.display='none';
                divDécoration.style.display='none';
                divservices.style.display='none';
            });
            buttonPublicité.addEventListener("click", () => {
                sectionourservicespage.style.height='auto';    
                buttonPublicité.style.backgroundColor='white';
                buttonCadeaux.style.backgroundColor='rgb(242, 200, 59)';
                buttonDécoration.style.backgroundColor='rgb(242, 200, 59)';
                btnpbs.style.color='rgb(40, 36, 36)';
                btncdx.style.color='white';
                btndcr.style.color='white';
                divCadeaux.style.display='none';
                divPublicité.style.display='block';
                divDécoration.style.display='none';
                divservices.style.display='none';
            });
            buttonDécoration.addEventListener("click", () => {
                sectionourservicespage.style.height='auto';    
                buttonPublicité.style.backgroundColor='rgb(242, 200, 59)';
                buttonCadeaux.style.backgroundColor='rgb(242, 200, 59)';
                buttonDécoration.style.backgroundColor='white';
                btndcr.style.color='rgb(40, 36, 36)';
                btnpbs.style.color='white';
                btncdx.style.color='white';
                divCadeaux.style.display='none';
                divPublicité.style.display='none';
                divDécoration.style.display='block';
                divservices.style.display='none';
            });

            // services page
            servicesmood.style.backgroundColor = 'white';
            servicesdescription.style.color = 'rgb(40, 36, 36)';
            servicespre1.style.color = 'rgb(40, 36, 36)';
            servicespre2.style.color = 'rgb(40, 36, 36)';
            servicespre3.style.color = 'rgb(40, 36, 36)';
            servicespre4.style.color = 'rgb(40, 36, 36)';
            servicespre5.style.color = 'rgb(40, 36, 36)';
            servicespre6.style.color = 'rgb(40, 36, 36)';
            servicespre7.style.color = 'rgb(40, 36, 36)';
            servicespre8.style.color = 'rgb(40, 36, 36)';
            servicespre9.style.color = 'rgb(40, 36, 36)';
            servicespre10.style.color = 'rgb(40, 36, 36)';
            servicespre11.style.color = 'rgb(40, 36, 36)';
            servicespre12.style.color = 'rgb(40, 36, 36)';
            servicespre13.style.color = 'rgb(40, 36, 36)';
            servicespre14.style.color = 'rgb(40, 36, 36)';
            servicespre15.style.color = 'rgb(40, 36, 36)';
            servicesVline2.style.backgroundColor = 'rgb(40, 36, 36)';
            servicesVline3.style.backgroundColor = 'rgb(40, 36, 36)';
            servicesVline4.style.backgroundColor = 'rgb(40, 36, 36)';
            servicescards.style.backgroundColor = 'whitesmoke';
            servicescards2.style.backgroundColor = 'whitesmoke';
            servicescards3.style.backgroundColor = 'whitesmoke';
            servicescards4.style.backgroundColor = 'whitesmoke';
            servicescards5.style.backgroundColor = 'whitesmoke';
            servicescards6.style.backgroundColor = 'whitesmoke';
            servicescards7.style.backgroundColor = 'whitesmoke';
            servicescards8.style.backgroundColor = 'whitesmoke';
            servicescards9.style.backgroundColor = 'whitesmoke';
            servicescards10.style.backgroundColor = 'whitesmoke';
            servicescards11.style.backgroundColor = 'whitesmoke';
            servicescards12.style.backgroundColor = 'whitesmoke';
            servicescards13.style.backgroundColor = 'whitesmoke';
            servicescards14.style.backgroundColor = 'whitesmoke';
            servicescards15.style.backgroundColor = 'whitesmoke';
            servicescards16.style.backgroundColor = 'whitesmoke';
            servicescards17.style.backgroundColor = 'whitesmoke';
            servicescards18.style.backgroundColor = 'whitesmoke';
            servicescards19.style.backgroundColor = 'whitesmoke';
            servicescards20.style.backgroundColor = 'whitesmoke';
            servicescards21.style.backgroundColor = 'whitesmoke';
            servicescards22.style.backgroundColor = 'whitesmoke';
            servicescards23.style.backgroundColor = 'whitesmoke';
            servicescards24.style.backgroundColor = 'whitesmoke';
            servicescards25.style.backgroundColor = 'whitesmoke';
            servicescards26.style.backgroundColor = 'whitesmoke';
            servicescards27.style.backgroundColor = 'whitesmoke';
            servicescards28.style.backgroundColor = 'whitesmoke';
            servicescards29.style.backgroundColor = 'whitesmoke';
            servicescards30.style.backgroundColor = 'whitesmoke';
            servicescards31.style.backgroundColor = 'whitesmoke';
            servicescards32.style.backgroundColor = 'whitesmoke';
            servicescards33.style.backgroundColor = 'whitesmoke';
            servicescards34.style.backgroundColor = 'whitesmoke';
            servicescards35.style.backgroundColor = 'whitesmoke';
            servicescards36.style.backgroundColor = 'whitesmoke';
            servicesTitreProduit.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit2.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit3.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit4.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit5.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit6.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit7.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit8.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit9.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit10.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit11.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit12.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit13.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit14.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit15.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit16.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit17.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit18.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit19.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit20.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit21.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit22.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit23.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit24.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit25.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit26.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit27.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit28.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit29.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit30.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit31.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit32.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit33.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit34.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit35.style.color = 'rgb(40, 36, 36)';
            servicesTitreProduit36.style.color = 'rgb(40, 36, 36)';
            servicesDescProduit.style.color = 'rgb(40, 36, 36)';


            aboutmood.style.backgroundColor = 'white';

            teammood.style.backgroundColor = 'white';

        }
        console.log('After applying theme:', theme);
    }
    