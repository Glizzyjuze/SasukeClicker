let chakra = 0;
let points = 1;


let SasukeUpgrades = document.querySelector(".Sasuke-upgrades");
let acquiredUpgrades = [];




let jutsuButtons = [
    {
        name: "Sharingan (150)",
        chakraRequirement: 150,
        jutsuRequirement: "",
        drain: 1,
        visualProwess: 1,
    },
    {
        name: "Fireball Jutsu (500)",
        chakraRequirement: 500,
        jutsuRequirement: "",
        burn: 3,
    },
    {
        name: "Chidori (1000)",
        chakraRequirement: 1000,
        jutsuRequirement: "",
        concentrate: 10,
    },
    {
        name: "Mangekyou Sharingan (10000)",
        chakraRequirement: 10000,
        jutsuRequirement: "Sharingan (150)",
        tsukuyomi: 100
    },
    {
        name: "Amaterasu (50000)",
        chakraRequirement: 50000,
        jutsuRequirement: "Fireball Jutsu (500)",
        kagutsuchi: 500
    },
    {
        name: "Onyx Chidori (100000)",
        chakraRequirement: 100000,
        jutsuRequirement: "Chidori (1000)",
        discharge: 1000
    }
];


function handSigns()
{
    SasukeUpgrades.innerHTML = "";
    for (let index = 0; index < jutsuButtons.length; index++)
    {
        if (acquiredUpgrades.find((upgrade) => upgrade == jutsuButtons[index].name))
        {
            continue;
        }


        if (jutsuButtons[index].jutsuRequirement != "")
        {
            if (!acquiredUpgrades.find((upgrade) => upgrade == jutsuButtons[index].jutsuRequirement))
            {
                continue;
            }
        }


        let newJutsu = document.createElement("button");
        newJutsu.innerHTML = jutsuButtons[index].name;
        newJutsu.addEventListener("click", () =>
        {
            unlockJutsu(
                jutsuButtons[index].name,
                jutsuButtons[index].chakraRequirement);
        });
        SasukeUpgrades.append(newJutsu);
        newJutsu.addEventListener("click", () =>
        {
            jutsuEffect(
                jutsuButtons[index].drain,
                jutsuButtons[index].visualProwess,
                jutsuButtons[index].burn,
                jutsuButtons[index].concentrate,
                jutsuButtons[index].tsukuyomi,
                jutsuButtons[index].kagutsuchi,
                jutsuButtons[index].discharge);
        });
    }
}


function unlockJutsu(name, chakraRequirement)
{
    if (chakra >= chakraRequirement)
    {
        chakra -= chakraRequirement;
        acquiredUpgrades.push(name);
        console.log(acquiredUpgrades);
        update();
    }
}


function jutsuEffect(drain, visualProwess, burn, concentrate, tsukuyomi, kagutsuchi, discharge)
{
    if (drain == 1)
    {
        setInterval(() => {
            chakra -= drain;
            update(); }, 1000);
        points += visualProwess;
    }


    if (burn == 3)
    {
        points += burn;
    }


    if (concentrate == 10)
    {
        points += concentrate;
    }

    if (tsukuyomi == 100)
    {
        points += tsukuyomi;
    }

    if (kagutsuchi == 500)
    {
        points += kagutsuchi;
    }

    if (discharge == 1000)
    {
        points += discharge;
    }
}


let chakraPoints = document.querySelector(".chakra-points");


function addPoints()
{
    chakra += points;
    update();
}


let chakraCharge = document.querySelector(".chakra-charge");
chakraCharge.addEventListener("click", addPoints);


function update()
{
    handSigns();
    chakraPoints.innerHTML = chakra;
}


update();