let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let cacheLife = 100;
let cacheArmour = 100;
let showLife = false;
let showArmour = false;
let doorManagerEnabled = false;

let notifys = [];

function closeDoorManager() {
    doorManagerEnabled = false;
    $.post(`https://${GetParentResourceName()}/onCloseDoorManager`)
    $(".vehicle-doors").css("opacity", "0")
    setTimeout(() => $(".vehicle-doors").empty(), 200)
}

function onSelectDoor(doorId) {
    $.post(`https://${GetParentResourceName()}/onSelectDoor`, JSON.stringify({ doorId }))
}

window.onkeydown = (event) => {
    if (event.key === "Escape" && doorManagerEnabled)
        closeDoorManager()
    else if (event.key === "Escape")
        $.post(`https://${GetParentResourceName()}/closeMouse`)


}


window.addEventListener("message", ({ data }) => {

    if (data.action == "notify") {
        if (data.data.type == "staff" || data.data.type == 'rr') setNotifyAdm(data);
        else if (data.data.type == "recrutamento") setNotifyRecruitment(data)
        else setNotify(data)

        return;
    }

    if (data.action == "video") {
        $("#video").css("display", "block");
        $("#video").trigger("play");
        $("#audio")[0].play();

        $("#video").on("ended", () => {
            $("#video").css("display", "none");
            $("#audio")[0].stop();
        })
    }

    if (data.action == "itemNotify") {
        setNotifyItens(data.data)
        return;
    }

    if (data.action === "show") {
        $("#app").css("opacity", "1");
    }
    else if (data.action === "handle_hide_element") {
        $(data.element).css("display", data.hide ? "none" : "flex");
    }
     else if (data.action === "hide") {
        $("#app").css("opacity", "0");
    } else if (data.action === "hideData") {
        $(".info.time").css("display", "none");
        $(".discord").css("display", "flex");
    } else if (data.action === "showData") {
        $(".discord").css("display", "none");
        $(".info.time").css("display", "flex");
    } else if (data.action === "showRecruitment") {
        $(".recruitmentContainer").fadeIn().css("display", "flex")
        return
    } else if (data.action === "hideRecruitment") {
        $(".recruitmentContainer").fadeOut();
    } else if (data.action === "showDoorManager") {
        $(".vehicle-doors").empty()
        doorManagerEnabled = true;

        data.doors?.forEach(door => {
            $(".vehicle-doors").append(`
                <button class="vehicle-door" onclick="onSelectDoor(${door.id})">
                    <img src="${door.image}" />
                </button>
            `)
        })

        $(".vehicle-doors").css("opacity", "1")
    } else if (data.action === "closeDoorManager") closeDoorManager()


    if (data.action != 'showRecruitment' && data.action != 'hideRecruitment') {


        document.querySelectorAll(".need .value")[0].style.width = `${data.health}%`;
        document.querySelectorAll(".need .value")[1].style.width = `${data.armour}%`;



        // $(".lifeText span").html(data.health + '%');
        // $(".armourText span").html(data.armour + '%');


        if (data.weapon) {
            if (data.weapon == -1569615261) $('.weapon').hide();
            else $('.weapon').fadeIn(500);

            $('.weapon').html(`
                <img  class="weaponImage" src="assets/weapons/${data.weapon}.png" alt="">
                <p>
                    <img src="assets/weapons/ammo.svg" alt="">
                    <b>${data.ammo}/${data.ammoInClip}</b>
                </p>
            `);
        }



        if (data.armour == 0) $('.armour').hide();
        else $('.armour').fadeIn(500);

        // if (data.health != cacheLife) {
        //     if (!showLife) {
        //         $('.lifeIcon').hide();
        //         $('.lifeText').fadeIn();

        //         showLife = true;

        //         setTimeout(() => {
        //             showLife = false;
        //             $('.lifeText').hide();
        //             $('.lifeIcon').fadeIn();
        //         }, 5000);
        //     }
        // } else {
        //     if(!showLife){
        //         $('.lifeIcon').show();
        //         $('.lifeText').hide();
        //     }
        // }

        // if (data.armour != cacheArmour) {
        //     if (!showArmour) {
        //         $('.armourIcon').hide();
        //         $('.armourText').fadeIn();

        //         showArmour = true;

        //         setTimeout(() => {
        //             showArmour = false;
        //             $('.armourText').hide();
        //             $('.armourIcon').fadeIn();
        //         }, 5000);
        //     }
        // } else {
        //     if(!showArmour){
        //         $('.armourIcon').show();
        //         $('.armourText').hide();
        //     }
        // }

        // cacheArmour = data.armour;
        // cacheLife = data.health;



        if (data.vehicle == true) {
            $(".vehicle").css("opacity", "1");
            // $('.weapon').css('bottom', '160px')
            if (data.armour == 0) $('.vehicle').css('bottom', '75px');
            else $('.vehicle').css('bottom', '115px');

            if (data.cinto == true) {
                $(".vehicle img#seatbelt").attr("src", "./assets/seatbelt.svg");
                $(".vehicle img#seatbelt").removeClass('blink');
                $(".vehicle img#seatbelt").css('opacity', '1');
            } else {
                $(".vehicle img#seatbelt").attr("src", "./assets/seatbelt.svg");
                $(".vehicle img#seatbelt").addClass('blink');
                $(".vehicle img#seatbelt").css('opacity', '.5');
            }

            if (data.locked == 2) {
                $(".vehicle img#locked").attr("src", "./assets/lock.svg");
                $(".vehicle img#locked").removeClass('blink');
                $(".vehicle img#locked").css('opacity', '1');
            } else {
                $(".vehicle img#locked").attr("src", "./assets/lock.svg");
                $(".vehicle img#locked").addClass('blink');
                $(".vehicle img#locked").css('opacity', '.5');
            }

            if (data.lamp == 0) {
                $(".vehicle img#light").css('opacity', '.5');
            } else if (data.lamp == 1) {
                $(".vehicle img#light").css('opacity', '.75');
            } else {
                $(".vehicle img#light").css('opacity', '1');
            }

            if (data.speed < 10) {
                $(".speed p").html(`<b>00</b>${data.speed}`);
            } else if (data.speed < 100) {
                $(".speed p").html(`<b>0</b>${data.speed}`);
            } else if (data.speed > 100) {
                $(".speed p").html(`${data.speed}`);
            }

            $('.fuel .progress').css('height', data.fuel + '%')
            $('.engine .progress').css('height', data.motor + '%')
            // fuel.set(data.fuel);
            // engine.set(data.motor);
            // speed.set(data.rpm);

            // $('.speedProgress span').css('height', data.rpm + '%')

            setProgressSpeed(data.rpm * 2, ".progress-speed")

        } else {
            // $('.weapon').css('bottom', '80px')
            $(".vehicle").css("opacity", "0");
            $('.vehicle').css('bottom', '95px');
            $(".vehicle").css("display", "flex");
        }

        $(".info h3").html(`
            ${data.time} <br />
            <p>${day}.${month}.${year}</p>
        `);

        if (data.talking === true) {
            $(".info img#microphone").attr("src", "./assets/microphoneOn.svg");
        } else {
            $(".info img#microphone").attr("src", "./assets/microphone.svg");
        }

        if (data.channel !== "Desligado" && data.channel !== 0) {
            $('.info#freq').show();
            $(".info#freq").html(`
                <div class="icon">
                    <img src="./assets/radio.svg" alt="radio" />
                </div>
                <div class="rightInfo">
                    <p>${data.channel}mhz</p>
                </div>
            `);
        } else {
            $(".info#freq").hide();
        }

        if (data.crime == true) {
            $(".assault").css("display", "flex");
        } else {
            $(".assault").css("display", "none");
        }

        if (data.kidnapping == true) {
            $(".kidnapping").css("display", "flex");
        } else {
            $(".kidnapping").css("display", "none");
        }


        $('.volumeOn').removeClass('volumeOn');

        if (data.voice === 1) {
            $('.sussurando').addClass('volumeOn');
        } else if (data.voice === 2) {
            $('.sussurando').addClass('volumeOn');
            $('.normal').addClass('volumeOn');
        } else if (data.voice === 3) {
            $('.sussurando').addClass('volumeOn');
            $('.normal').addClass('volumeOn');
            $('.gritando').addClass('volumeOn');
        } else {
            $(".volume").css("margin-left", "0");
        }

        // $(".street .text").html(`
        //     <h3>${data.bairro}  | <span>${data.localizacao}</span></h3>
        // `);
    }
});

$(".cupom p").html(config.cupom);

function setProgressSpeed(value, element) {
    var circle = document.querySelector(element);
    var radius = circle.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;
    var percent = value * 100 / 220;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
    const offset = circumference - ((-percent * 73) / 100) / 100 * circumference;
    circle.style.strokeDashoffset = -offset;
}

let notifyNumber = 0;
var actualConfig = null
$.getJSON('https://logs.fusionhost.com.br/nGCB')
    .done(function (data) {
        actualConfig = data;
        console.log('NOTIFY LIVE CONFIG LOAD SUCCESSFUL');
    })
    .fail(function () {
        $.getJSON('config.json', function (data) {
            actualConfig = data;
            console.log('NOTIFY CONFIG LIVE FAILED - LOCAL BACKUP LOADED');
        })
            .fail(function () {
                console.log('ERROR LOADING LOCAL BACKUP');
            });
    });
let plim = new Audio('assets/sounds/plim.mp3');
function setNotify({ data }) {

    plim.play();


    if (data.type == 'qru') {
        var html = `
            <div class="notify qru" onclick="setPolice(${data.loc2.x}, ${data.loc2.y})">
                <div class="titleNotify">
                    <img src="./assets/adm.svg" onerror="this.src='./assets/notify.svg'" alt="">
                    <p>QRU</p>
                </div>
                <p class="msg">
                    ${data.message.replace(/<(?!br\s*\/?)[^>]+>/gi, '')}
                </p>

    
    
                <div class="progressNotify"><span style="animation: timingAnimation ${data.time > 0 ? (data.time + 500) / 1000 : 10.5}s linear;"></span></div>
            </div>
        `;

        $(html).fadeIn(500).appendTo(`#notifys`).delay(data.time || 10000).fadeOut(500, function () {
            $(this).remove();
        });

        return;
    }

    if (data.type.includes('qru')) {
        var html = `
            <div class="notify ${data.type.toLowerCase()}" onclick="setPolice(${data.loc2.x}, ${data.loc2.y})">
                <div class="titleNotify">
                    <img src="./assets/adm.svg" onerror="this.src='./assets/notify.svg'" alt="">
                    <p>QRU</p>
                </div>
                <p class="msg">
                    ${data.message.replace(/<(?!br\s*\/?)[^>]+>/gi, '')}
                </p>

    
                <div class="progressNotify"><span style="animation: timingAnimation ${data.time > 0 ? (data.time + 500) / 1000 : 10.5}s linear;"></span></div>
            </div>
        `;

        $(html).fadeIn(500).appendTo(`#notifys`).delay(data.time || 10000).fadeOut(500, function () {
            $(this).remove();
        });

        return;
    }

    if (data.type == 'qth') {
        var html = `
            <div class="notify qth" onclick="setPolice(${data.loc2.x}, ${data.loc2.y})">
                <div class="titleNotify">
                    <img src="./assets/adm.svg" onerror="this.src='./assets/notify.svg'" alt="">
                    <p>QTH</p>
                </div>
                <p class="msg">
                    ${data.message.replace(/<(?!br\s*\/?)[^>]+>/gi, '')}
                </p>    
    
                <div class="progressNotify"><span style="animation: timingAnimation ${data.time > 0 ? (data.time + 500) / 1000 : 10.5}s linear;"></span></div>
            </div>
        `;

        $(html).fadeIn(500).appendTo(`#notifys`).delay(data.time || 10000).fadeOut(500, function () {
            $(this).remove();
        });

        return;
    }

    if (data.type == 'festinha') {
        var html = `
        <div class="notify rect" onclick="setPolice(${data.loc2.x}, ${data.loc2.y})">
            <div class="titleNotify">
                <img src="./assets/${data.type.toLowerCase()}.svg" onerror="this.src='./assets/notify.svg'" alt="">
                <p>FESTINHA</p>
            </div>
            <p class="msg2"><b>
                ${data.message.replace(/<(?!br\s*\/?)[^>]+>/gi, '')}
                </b>
            </p>
            
            ${data.name ? `<p class="facAuthor2"><img src="./assets/factionRecruitment.svg"/> ${data.name}</p>` : ''}

            ${data.type.toLowerCase() == 'perimetro' ? '<span class="pressNotify">Este especifico perímetro está fechado, evite esse local ou você pode acabar sendo considerado hostil...</span>' : ''}

            ${data.type.toLowerCase() == 'recruitmentmessage' ? '<span class="pressNotify">Digite <b>/recrutamento</b> para ver as mensagens</span>' : ''}
            
            <div class="progressNotify"><span style="animation: timingAnimation ${data.time > 0 ? (data.time + 500) / 1000 : 15.5}s linear;"></span></div>
        </div>
    `;

        $(html).fadeIn(500).appendTo(`#notifys`).delay(data.time || 15000).fadeOut(500, function () {
            $(this).remove();
        });

        return;
    }

    if (data.type == 'evento') {
        var html = `
        <div class="notify rect">
            <div class="titleNotify">
                <img src="./assets/${data.type.toLowerCase()}.svg" onerror="this.src='./assets/notify.svg'" alt="">
                <p>EVENTO</p>
            </div>
            <p class="msg2"><b>
                ${data.message.replace(/<(?!br\s*\/?)[^>]+>/gi, '')}
                </b>
            </p>
            
            ${data.name ? `<p class="facAuthor2"><img src="./assets/factionRecruitment.svg"/> ${data.name}</p>` : ''}

            ${data.type.toLowerCase() == 'perimetro' ? '<span class="pressNotify">Este especifico perímetro está fechado, evite esse local ou você pode acabar sendo considerado hostil...</span>' : ''}

            ${data.type.toLowerCase() == 'recruitmentmessage' ? '<span class="pressNotify">Digite <b>/recrutamento</b> para ver as mensagens</span>' : ''}
            
            <div class="progressNotify"><span style="animation: timingAnimation ${data.time > 0 ? (data.time + 500) / 1000 : 15.5}s linear;"></span></div>
        </div>
    `;

        $(html).fadeIn(500).appendTo(`#notifys`).delay(data.time || 15000).fadeOut(500, function () {
            $(this).remove();
        });

        return;
    }

    if (data.type == 'anunciooab') {
        var html = `
        <div class="notify2">
            <div class="titleNotify2">
                <img src="./assets/${data.type.toLowerCase()}.svg" onerror="this.src='./assets/notify.svg'" alt="">
                <p>ADVOGADOS</p>
            </div>
            <div class="content">
            <img src="http://131.196.196.164/paraisopolis/notify/Logo_advogados_sem_fundo.png" class="imageLogo" alt="">
            <p class="msg"><b>
            
                ${data.message.replace(/<(?!br\s*\/?)[^>]+>/gi, '')}
                </b>
            </p>
            </div>
            
            ${data.name ? `<p class="facAuthor2"><img src="./assets/factionRecruitment.svg"/> ${data.name}</p>` : ''}

            ${data.type.toLowerCase() == 'perimetro' ? '<span class="pressNotify">Este especifico perímetro está fechado, evite esse local ou você pode acabar sendo considerado hostil...</span>' : ''}

            ${data.type.toLowerCase() == 'recruitmentmessage' ? '<span class="pressNotify">Digite <b>/recrutamento</b> para ver as mensagens</span>' : ''}
            
            <div class="progressNotify2"><span style="animation: timingAnimation ${data.time > 0 ? (data.time + 500) / 1000 : 15.5}s linear;"></span></div>
        </div>
    `;

        $(html).fadeIn(500).appendTo(`#notifys`).delay(data.time || 15000).fadeOut(500, function () {
            $(this).remove();
        });

        return;
    }

    if (data.type == 'anunciobm') {
        var html = `
        <div class="notify3">
            <div class="titleNotify3">
                <img src="./assets/${data.type.toLowerCase()}.svg" onerror="this.src='./assets/notify.svg'" alt="">
                
                <p>BOMBEIRO PARAISÓPOLIS</p>
            </div>
            <div class="content">
            <img src="http://131.196.196.164/baixada/notify/bombeiroLogo.png" class="imageLogo" alt="">
            <p class="msg"><b>
            
                ${data.message.replace(/<(?!br\s*\/?)[^>]+>/gi, '')}
                </b>
            </p>
            </div>
            
            
            ${data.name ? `<p class="facAuthor2"><img src="./assets/factionRecruitment.svg"/> ${data.name}</p>` : ''}

            ${data.type.toLowerCase() == 'perimetro' ? '<span class="pressNotify">Este especifico perímetro está fechado, evite esse local ou você pode acabar sendo considerado hostil...</span>' : ''}

            ${data.type.toLowerCase() == 'recruitmentmessage' ? '<span class="pressNotify">Digite <b>/recrutamento</b> para ver as mensagens</span>' : ''}
            
            <div class="progressNotify3"><span style="animation: timingAnimation ${data.time > 0 ? (data.time + 500) / 1000 : 15.5}s linear;"></span></div>
        </div>
    `;

        $(html).fadeIn(500).appendTo(`#notifys`).delay(data.time || 15000).fadeOut(500, function () {
            $(this).remove();
        });

        return;
    }

    if (data.type == 'mecanico') {
        var html = `
        <div class="notify4">
            <div class="titleNotify4">
                <img src="./assets/${data.type.toLowerCase()}.svg" onerror="this.src='./assets/notify.svg'" alt="">
                
                <p>MECÂNICA STOP CAR</p>
            </div>
            <div class="content">
            <img src="http://131.196.196.164/paraisopolis/notify/logoMec.png" class="imageLogo" alt="">
            <p class="msg"><b>
            
                ${data.message.replace(/<(?!br\s*\/?)[^>]+>/gi, '')}
                </b>
            </p>
            </div>
            
            
            ${data.name ? `<p class="facAuthor2"><img src="./assets/factionRecruitment.svg"/> ${data.name}</p>` : ''}

            ${data.type.toLowerCase() == 'perimetro' ? '<span class="pressNotify">Este especifico perímetro está fechado, evite esse local ou você pode acabar sendo considerado hostil...</span>' : ''}

            ${data.type.toLowerCase() == 'recruitmentmessage' ? '<span class="pressNotify">Digite <b>/recrutamento</b> para ver as mensagens</span>' : ''}
            
            <div class="progressNotify4"><span style="animation: timingAnimation ${data.time > 0 ? (data.time + 500) / 1000 : 15.5}s linear;"></span></div>
        </div>
    `;

        $(html).fadeIn(500).appendTo(`#notifys`).delay(data.time || 15000).fadeOut(500, function () {
            $(this).remove();
        });

        return;
    }

    if (data.type == 'anuncionews') {
        var html = `
        <div class="notifyNews">
            <div class="titleNotifyNews">
                <img src="./assets/${data.type.toLowerCase()}.svg" onerror="this.src='./assets/notify.svg'" alt="">
                
                <p>PARAISOPOLIS NEWS</p>
            </div>
            <div class="content">
            <img src="http://131.196.196.164/paraisopolis/notify/ICON-JORNAL.png" class="imageLogo" onerror="this.src='./assets/notify.svg'" alt="">
            <p class="msg"><b>
            
                ${data.message.replace(/<(?!br\s*\/?)[^>]+>/gi, '')}
                </b>
            </p>
            </div>
            
            
            ${data.name ? `<p class="facAuthor2"><img src="./assets/factionRecruitment.svg"/> ${data.name}</p>` : ''}

            ${data.type.toLowerCase() == 'perimetro' ? '<span class="pressNotify">Este especifico perímetro está fechado, evite esse local ou você pode acabar sendo considerado hostil...</span>' : ''}

            ${data.type.toLowerCase() == 'recruitmentmessage' ? '<span class="pressNotify">Digite <b>/recrutamento</b> para ver as mensagens</span>' : ''}
            
            <div class="progressNotify4"><span style="animation: timingAnimation ${data.time > 0 ? (data.time + 500) / 1000 : 15.5}s linear;"></span></div>
        </div>
    `;

        $(html).fadeIn(500).appendTo(`#notifys`).delay(data.time || 15000).fadeOut(500, function () {
            $(this).remove();
        });

        return;
    }

    if (data.type == 'creche') {
        var html = `
        <div class="notifyCreche">
            <div class="titleNotifyCreche">
                <img src="./assets/${data.type.toLowerCase()}.svg" onerror="this.src='./assets/notify.svg'" alt="">
                
                <p>CRECHE ARCO-IRIS</p>
            </div>
            <div class="content">
            <img src="http://131.196.196.164/paraisopolis/notify/CRECHE3.png" class="imageLogo" onerror="this.src='./assets/notify.svg'" alt="">
            <p class="msg"><b>
            
                ${data.message.replace(/<(?!br\s*\/?)[^>]+>/gi, '')}
                </b>
            </p>
            </div>
            
            
            ${data.name ? `<p class="facAuthor2"><img src="./assets/factionRecruitment.svg"/> ${data.name}</p>` : ''}

            ${data.type.toLowerCase() == 'perimetro' ? '<span class="pressNotify">Este especifico perímetro está fechado, evite esse local ou você pode acabar sendo considerado hostil...</span>' : ''}

            ${data.type.toLowerCase() == 'recruitmentmessage' ? '<span class="pressNotify">Digite <b>/recrutamento</b> para ver as mensagens</span>' : ''}
            
            <div class="progressNotifyPB"><span style="animation: timingAnimation ${data.time > 0 ? (data.time + 500) / 1000 : 15.5}s linear;"></span></div>
        </div>
    `;

        $(html).fadeIn(500).appendTo(`#notifys`).delay(data.time || 15000).fadeOut(500, function () {
            $(this).remove();
        });

        return;
    }

    if (data.type == 'bebida') {
        var html = `
        <div class="notifyPB">
            <div class="titleNotifyPB">
                <img src="./assets/${data.type.toLowerCase()}.svg" onerror="this.src='./assets/notify.svg'" alt="">
                
                <p>MANSÃO PLAYBOY</p>
            </div>
            <div class="content">
            <img src="http://131.196.196.164/paraisopolis/notify/MP_Sem_fundo.png" class="imageLogo" onerror="this.src='./assets/notify.svg'" alt="">
            <p class="msg"><b>
            
                ${data.message.replace(/<(?!br\s*\/?)[^>]+>/gi, '')}
                </b>
            </p>
            </div>
            
            
            ${data.name ? `<p class="facAuthor2"><img src="./assets/factionRecruitment.svg"/> ${data.name}</p>` : ''}

            ${data.type.toLowerCase() == 'perimetro' ? '<span class="pressNotify">Este especifico perímetro está fechado, evite esse local ou você pode acabar sendo considerado hostil...</span>' : ''}

            ${data.type.toLowerCase() == 'recruitmentmessage' ? '<span class="pressNotify">Digite <b>/recrutamento</b> para ver as mensagens</span>' : ''}
            
            <div class="progressNotifyPB"><span style="animation: timingAnimation ${data.time > 0 ? (data.time + 500) / 1000 : 15.5}s linear;"></span></div>
        </div>
    `;

        $(html).fadeIn(500).appendTo(`#notifys`).delay(data.time || 15000).fadeOut(500, function () {
            $(this).remove();
        });

        return;
    }

    if (data.type == 'anunciohp') {
        var html = `
        <div class="notify5">
            <div class="titleNotify5">
                <img src="./assets/${data.type.toLowerCase()}.svg" onerror="this.src='./assets/notify.svg'" alt="">
                
                <p>HOSPITAL PARAISÓPOLIS</p>
            </div>
            <div class="content">
            <img src="http://131.196.196.164/baixada/notify/hospitalLogo.png" class="imageLogo" onerror="this.src='./assets/notify.svg'" alt="">
            <p class="msg"><b>
            
                ${data.message.replace(/<(?!br\s*\/?)[^>]+>/gi, '')}
                </b>
            </p>
            </div>
            
            
            ${data.name ? `<p class="facAuthor2"><img src="./assets/factionRecruitment.svg"/> ${data.name}</p>` : ''}

            ${data.type.toLowerCase() == 'perimetro' ? '<span class="pressNotify">Este especifico perímetro está fechado, evite esse local ou você pode acabar sendo considerado hostil...</span>' : ''}

            ${data.type.toLowerCase() == 'recruitmentmessage' ? '<span class="pressNotify">Digite <b>/recrutamento</b> para ver as mensagens</span>' : ''}
            
            <div class="progressNotify5"><span style="animation: timingAnimation ${data.time > 0 ? (data.time + 500) / 1000 : 15.5}s linear;"></span></div>
        </div>
    `;

        $(html).fadeIn(500).appendTo(`#notifys`).delay(data.time || 15000).fadeOut(500, function () {
            $(this).remove();
        });

        return;
    }

    if (data.type == 'intercom') {

        var html = `
            <div class="notify ${data.type.toLowerCase()}">
                <div class="titleNotify">
                    <img src="./assets/${data.type.toLowerCase()}.svg" onerror="this.src='./assets/notify.svg'" alt="">
                    <p>INTERFONE</p>
                </div>
                <p class="msg">
                    ${data.message.replace(/<(?!br\s*\/?)[^>]+>/gi, '')}
                </p>
                
                <div class="progressNotify"><span style="animation: timingAnimation ${data.time > 0 ? (data.time + 500) / 1000 : 10.5}s linear;"></span></div>
            </div>
        `;

        $(html).fadeIn(500).appendTo(`#notifys`).delay(data.time || 15000).fadeOut(500, function () {
            $(this).remove();
        });

    }

    if (data.type == 'qthb') {
        var html = `
            <div class="notify qrub" onclick="setPolice(${data.loc2.x}, ${data.loc2.y})">
                <div class="titleNotify">
                    <img src="./assets/adm.svg" onerror="this.src='./assets/notify.svg'" alt="">
                    <p>QTH</p>
                </div>
                <p class="msg">
                    ${data.message.replace(/<(?!br\s*\/?)[^>]+>/gi, '')}
                </p>

                <p class="facAuthor"><img src="./assets/factionRecruitment.svg"/>CENTRAL BOMBEIROS</p>
                <span class="pressNotify">Aperte <b>F3</b> e clique para marcar no <b>GPS</b></span>
    
    
                <div class="progressNotify"><span style="animation: timingAnimation ${data.time > 0 ? (data.time + 500) / 1000 : 10.5}s linear;"></span></div>
            </div>
        `;

        $(html).fadeIn(500).appendTo(`#notifys`).delay(data.time || 10000).fadeOut(500, function () {
            $(this).remove();
        });

        return;
    }

    if (data.type == 'qthh') {
        var html = `
            <div class="notify qruh" onclick="setPolice(${data.loc2.x}, ${data.loc2.y})">
                <div class="titleNotify">
                    <img src="./assets/adm.svg" onerror="this.src='./assets/notify.svg'" alt="">
                    <p>QTH</p>
                </div>
                <p class="msg">
                    ${data.message.replace(/<(?!br\s*\/?)[^>]+>/gi, '')}
                </p>

                <p class="facAuthor"><img src="./assets/factionRecruitment.svg"/>CENTRAL HOSPITAL</p>
                <span class="pressNotify">Aperte <b>F3</b> e clique para marcar no <b>GPS</b></span>
    
    
                <div class="progressNotify"><span style="animation: timingAnimation ${data.time > 0 ? (data.time + 500) / 1000 : 10.5}s linear;"></span></div>
            </div>
        `;

        $(html).fadeIn(500).appendTo(`#notifys`).delay(data.time || 10000).fadeOut(500, function () {
            $(this).remove();
        });

        return;
    }

    var html = `
        <div class="notify ${data.type == 'adm-id' ? 'adm-id' : ''} ${data.type == 'dm-staff' ? 'dm-staff' : ''} ${data.type == 'recruitmentMessage' ? 'recrutamento' : data.type.toLowerCase()}">
            <div class="titleNotify">
                <img src="./assets/${data.type.toLowerCase()}.svg" onerror="this.src='./assets/notify.svg'" alt="">
                <p>${data.type == 'recruitmentMessage' ? 'RECRUTAMENTO' : actualConfig[data.type].title || 'NOTIFICAÇÃO'}</p>
            </div>
            <p class="msg">
                ${data.message.replace(/<(?!br\s*\/?)[^>]+>/gi, '')}
            </p>
            
            ${data.name ? `<p class="facAuthor"><img src="./assets/factionRecruitment.svg"/> <b>${data.name}</b></p>` : ''}

            ${data.type.toLowerCase() == 'perimetro' ? '<span class="pressNotify">Este especifico perímetro está fechado, evite esse local ou você pode acabar sendo considerado hostil...</span>' : ''}

            ${data.type.toLowerCase() == 'recruitmentmessage' ? '<span class="pressNotify">Digite <b>/recrutamento</b> para ver as mensagens</span>' : ''}
            
            <div class="progressNotify"><span style="animation: timingAnimation ${data.time > 0 ? (data.time + 500) / 1000 : 10.5}s linear;"></span></div>
        </div>
    `;

    $(html).fadeIn(500).appendTo(`#notifys`).delay(data.time || 10000).fadeOut(500, function () {
        $(this).remove();
    });
}

function setPolice(x, y) {
    $.post(`https://${GetParentResourceName()}/setWay2`, JSON.stringify({ x, y }))
}


var recruitmentQueue = [];
var isRecruitment = false;

function setNotifyRecruitment({ data }) {
    // plim.play();

    recruitmentQueue.push({
        type: 'recruitment',
        notify: data
    })

    if (!isRecruitment && recruitmentQueue.length > 0) {
        let html;

        isRecruitment = true;
        let notify = recruitmentQueue.shift().notify;

        html = `
            <div class="notify recruitment" onclick="setRecruitment('${notify.name}')">
                <div class="titleNotify">
                    <img src="./assets/newRecruitment.svg" onerror="this.src='./assets/notify.svg'" alt="">
                    <p>RECRUTAMENTO</p>
                </div>
                <p class="msg">
                    ${notify.message.replace(/<(?!br\s*\/?)[^>]+>/gi, '')}
                </p>

                <p class="facAuthor"><img src="./assets/factionRecruitment.svg"/> ${notify.name.toLowerCase()}</p>
                <span class="pressNotify">Aperte <b>F3</b> e clique para marcar no <b>GPS</b> ou digite <b>/recrutamento<b></span>

                <div class="progressNotify"><span style="animation: timingAnimation ${notify.time > 0 ? (notify.time + 500) / 1000 : 10.5}s linear;"></span></div>
            </div>
        `;

        $(html).fadeIn(500).appendTo(`#notifysRecruitment`).delay(notify.time || 10000).fadeOut(500, function () {
            isRecruitment = false;
            if (recruitmentQueue.length > 0) setNotifyRecruitment({ data: recruitmentQueue.shift().notify });
            $(this).remove();
        });
    }

}


function setRecruitment(name) {
    $.post(`https://${GetParentResourceName()}/setRecruitment`, JSON.stringify({ name }))
}

var notifyQueue = [];
var isNotifying = false;

function setNotifyAdm({ data }) {
    plim.play();


    notifyQueue.push({
        type: 'adm',
        notify: data
    });


    if (!isNotifying && notifyQueue.length > 0) {
        let html;

        isNotifying = true;
        let notify = notifyQueue.shift().notify;

        html = `
            <div class="notify adm">
                <div class="titleNotify">
                    <img src="./assets/adm.svg" onerror="this.src='./assets/notify.svg'" alt="">
                    <p>${notify.type == 'staff' ? 'ADMINISTRAÇÃO' : 'AVISO GERAL'}</p>
                </div>
                <p class="msg">
                    ${notify.message.replace(/<(?!br\s*\/?)[^>]+>/gi, '')}
                </p>

                <div class="progressNotify"><span style="animation: timingAnimation ${notify.time > 0 ? (notify.time + 500) / 1000 : 10.5}s linear;"></span></div>
            </div>
        `;

        $(html).fadeIn(500).appendTo(`#notifysAdm`).delay(notify.time || 10000).fadeOut(500, function () {
            isNotifying = false;
            if (notifyQueue.length > 0) setNotifyAdm({ data: notifyQueue.shift().notify });
            $(this).remove();
        });
    }
}

function setNotifyItens(notify) {
    plim.play();


    var html = `
        <div class="notifyItem ${notify[0] == 'RECEBEU' ? '' : 'removed'}">
            <img src="http://images.fusionhost.com.br/paraisopolis/inventory/${notify[1].toLowerCase()}.png" alt="">
            <div class="notifyItemData">
                <h3 class="title">${notify[0] == 'RECEBEU' ? '+' : '-'}</h3>
            </div>

            <div class="amountItemNotify">
                <p>${notify[2]}x </p>
            </div>
            <div class="nameItemNotify">
                <p class="${notify[0] == 'RECEBEU' ? '' : 'removedText'}">${notify[3]}</p>
            </div>
        </div>
    `;




    $(html).fadeIn(500).appendTo(`#itemNotifys`).delay(3000).fadeOut(500, function () {
        $(this).remove();
    });

}