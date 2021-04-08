//greys out form options when they are selected.
function disableSelectedOption(objectName) {
    let selectedOption;
    let nameInHtml = objectName.title.split(" ").join("-").toLowerCase();
    selectedOption = document.getElementById(`option-${nameInHtml}`);
    selectedOption.setAttribute('disabled', true);
}

//Add advantage name to selected advantages array/container and assign ID and class.
let selectedAdvantageArray = [];
let isDuplicate = false;

function addToSelectedArray(objectName) {
    if (selectedAdvantageArray.includes(objectName.title)) {
        isDuplicate = true;
        window.alert("You have already selected this advantage");
        console.log('duplicate selected');
    } else {
        selectedAdvantageArray.push(objectName.title);
        console.log(selectedAdvantageArray);
    }
}

function displaySelected() {
    const createSelectedAdvantageDiv = document.createElement('div');
    const placeSelectedText = document.getElementById('selected-advantages-text');

    selectedAdvantageArray.forEach(function (entry) {
        let nameInHtml = entry.split(" ").join("-").toLowerCase();
        placeSelectedText.appendChild(createSelectedAdvantageDiv);
        createSelectedAdvantageDiv.setAttribute("class", 'selected-advantages');
        createSelectedAdvantageDiv.setAttribute("id", `selected-advantage-${nameInHtml}`);
        createSelectedAdvantageDiv.innerHTML = entry;
        console.log(entry);
    })
}

//Add button and functionality to delete unwanted selection.
function addDeleteButton(objectName) {
    let nameInHtml = objectName.title.split(" ").join("-").toLowerCase();
    let appendTo = document.getElementById(`selected-advantage-${nameInHtml}`);
    const button = document.createElement('button');

    appendTo.append(button);
    button.setAttribute("id", `delete-${nameInHtml}`);
}

function removeAdvantageText(objectName) {
    let nameInHtml = objectName.title.split(" ").join("-").toLowerCase();
    let selectedAdvantageToRemove = document.getElementById(`selected-advantage-${nameInHtml}`);
    let advantageDescriptionToRemove = document.getElementById(`container-${nameInHtml}`);

    selectedAdvantageToRemove.remove();
    advantageDescriptionToRemove.remove();
    console.log(selectedAdvantageToRemove);
}

function removeFromArray(objectName) {
    let toRemove = selectedAdvantageArray.indexOf(objectName.title);
    if (toRemove > -1) {
        selectedAdvantageArray.splice(toRemove, 1);
    }
    console.log(toRemove);
    console.log(selectedAdvantageArray);
}

function reenableSelection(objectName) {
    let selectedOption;
    let nameInHtml = objectName.title.split(" ").join("-").toLowerCase();

    console.log(nameInHtml);
    selectedOption = document.getElementById(`option-${nameInHtml}`);
    selectedOption.removeAttribute('disabled');
    console.log(selectedOption);
}

function removeAdvantage(objectName) {
    let nameInHtml = objectName.title.split(" ").join("-").toLowerCase();
    document.getElementById(`delete-${nameInHtml}`).addEventListener("click", function () {
        removeAdvantageText(objectName);
        reenableSelection(objectName);
        removeFromArray(objectName);
    })
};

//Displays selected advantage titles in selection window.
function addToSelectedWindow(objectName) {
    addToSelectedArray(objectName);
    if (isDuplicate === false) {
        displaySelected();
        disableSelectedOption(objectName);
        addDeleteButton(objectName);
        removeAdvantage(objectName);
    }
}

//Creates containers for the advantage descriptions in the display choice section at bottom of page.
function createContainer(objectName) {
    let createDivElement = document.createElement('div');
    let placeAdvantageDescription = document.getElementById('place-advantage-text');
    let nameInHtml = objectName.title.split(" ").join("-").toLowerCase();
    placeAdvantageDescription.appendChild(createDivElement);
    createDivElement.classList.add("description-containers");
    createDivElement.setAttribute("id", `container-${nameInHtml}`);
}

//Creates and adds the text for the selected advantages title, points and description in place-advantage-text.
function addAdvantageTitle(objectName) {
    const createTitleElement = document.createElement('p');
    let nameInHtml = objectName.title.split(" ").join("-").toLowerCase();
    let titleToAdd = document.getElementById(`container-${nameInHtml}`);
    titleToAdd.append(createTitleElement);
    createTitleElement.classList.add("title");
    createTitleElement.innerText = objectName.title;
}

function addAdvantagePoints(objectName) {
    const createPointsElement = document.createElement('p');
    let nameInHtml = objectName.title.split(" ").join("-").toLowerCase();
    let titleToAdd = document.getElementById(`container-${nameInHtml}`);
    titleToAdd.append(createPointsElement);
    createPointsElement.classList.add("points");
    createPointsElement.innerText = objectName.points;
}

function addAdvantageDescription(objectName) {
    const createDescriptionElement = document.createElement('p');
    let nameInHtml = objectName.title.split(" ").join("-").toLowerCase();
    let descriptionToAdd = document.getElementById(`container-${nameInHtml}`);
    descriptionToAdd.append(createDescriptionElement);
    createDescriptionElement.classList.add("description");
    createDescriptionElement.innerText = objectName.description;
}

function addAdvantantageSubCategories(objectName) {
    if (objectName.subCategories) {
        const subCategoriesArray = objectName.subCategories;
        subCategoriesArray.forEach(function (entry) {
            let name = entry.name;
            let description = entry.text;
            let points = entry.points;
            const createSubCategoryElement = document.createElement('p');
            let nameInHtml = objectName.title.split(" ").join("-").toLowerCase();
            let subCategoryToAdd = document.getElementById(`container-${nameInHtml}`);

            subCategoryToAdd.append(createSubCategoryElement);
            createSubCategoryElement.classList.add("subCategories");
            createSubCategoryElement.setAttribute("id", `subCategory-${name}`);

            let sub = document.getElementById(`subCategory-${name}`);
            sub.innerHTML = `<i style="color: red; font-size: 1.25rem">${name}:</i><br>${description}<br><i>${points}.</i> `;
            console.log(subCategoriesArray);
        })
    }
}

function addExtraText(objectName) {
    if (objectName.extraText) {
        const createExtraTextElement = document.createElement('p');
        let nameInHtml = objectName.title.split(" ").join("-").toLowerCase();
        let extraTextToAdd = document.getElementById(`container-${nameInHtml}`);

        extraTextToAdd.append(createExtraTextElement);
        createExtraTextElement.classList.add("extra-text");
        createExtraTextElement.innerHTML = objectName.extraText;
    }
}

function addToDescriptionWindow(objectName) {
    if (isDuplicate === false) {
        createContainer(objectName);
        addAdvantageTitle(objectName);
        addAdvantagePoints(objectName);
        addAdvantageDescription(objectName);
        addAdvantantageSubCategories(objectName);
        addExtraText(objectName);
    }
    //Resets variable value to allow other advantages to be selected.
    isDuplicate = false;
}

function copyToClipboard() {
    let sectionToCopy = document.getElementById("items-to-copy");
    let currentRange;

    if (document.getSelection().rangeCount > 0) {
        currentRange = document.getSelection().getRangeAt(0);
        //remove the current selection
        window.getSelection().removeRange(currentRange);
    } else {
        currentRange = false;
    }

    let copyRange = document.createRange();
    copyRange.selectNode(sectionToCopy);
    window.getSelection().addRange(copyRange);
    document.execCommand("copy");

    window.getSelection().removeRange(copyRange);

    if (currentRange) {
        window.getSelection().addRange(currentRange);
    }
    window.alert("Advantages are copied to your clipboard. You can now paste in your prefered text editor");
}

//Event listeners for user advantages selection.

//AAAAAAAAAAAAAAAA
document.getElementById("submit-advantage-a").addEventListener("click", function (e) {
    e.preventDefault();
    const userAdvantageA = document.getElementById('user-advantages-a').value;

    if (userAdvantageA === 'absolute direction') {
        addToSelectedWindow(absoluteDirection);
        addToDescriptionWindow(absoluteDirection);

        console.log(selectedAdvantageArray);
    } else if (userAdvantageA === 'absolute timing') {
        addToSelectedWindow(absoluteTiming);
        addToDescriptionWindow(absoluteTiming);

        console.log(selectedAdvantageArray);
    } else if (userAdvantageA === 'acute senses') {
        addToSelectedWindow(acuteSenses);
        addToDescriptionWindow(acuteSenses);

        console.log(selectedAdvantageArray);
    }
});
















//............A
let absoluteDirection = {
    title: "Absolute Direction",
    points: "5 or 10 points",
    description: "You have an excellent sense of direction.This ability comes in two levels:",
    subCategories: [{
            name: "Absolute Direction",
            text: "You always know which way is north, and you can always retrace a path you have followed within the past month, no matter how faint or confusing. This ability does not work in environments such as interstellar space or the limbo of the astral plane, but it does work underground, underwater, and on other planets. This gives +3 to Body Sense and Navigation (Air, Land, or Sea).<br> (Note: The navigational sense that guides migratory creatures to their destination is too crude to qualify; treat it as a 0-point feature.)",
            points: "5 points"
        },
        {
            name: "3D Spatial Sense",
            text: "As above, but works in three dimensions. This ability is useful in deep space – although it does not help you if you travel across dimensions. You get the skill bonuses to Piloting and +2 to Aerobatics, Free Fall, and Navigation (Hyperspace or Space).",
            points: "10 points"
        }
    ]
}

let absoluteTiming = {
    title: "Absolute Timing",
    points: "2 or 5 points",
    description: "You have an accurate mental clock. This ability comes in two levels, both of which are somewhat cinematic:",
    subCategories: [{
            name: "Absolute Timing",
            text: "You always know what time it is, with a precision equal to the best personal timepieces widely available in your culture (but never better than a few seconds). You can measure elapsed time with equal accuracy. Neither changes of time zone nor sleep interferes with this ability, and you can wake up at a predetermined time if you choose. Being knocked unconscious, hypnotized, etc. may prevent this advantage from working, and time travel will confuse you until you find out what the “new” time is. ",
            points: "2 points"
        },
        {
            name: "Chronolocation",
            text: "As above, but time travel does not interfere – you alwaysknow what time it is in an absolute sense. Note that things like Daylight Savings Time and calendar reform can still confuse you! When you travel in time, the GM may tell you, “You have gone back exactly 92,876.3 days,” and let you – or your character – deal with questions like, “What about leap year?",
            points: "5 points"
        }
    ]
}

let acuteSenses = {
    title: "Acute Senses",
    points: "2 points/level",
    description: "You have superior senses. Each Acute Sense is a separate advantage that gives +1 per level to all Sense rolls (p. 358) you make – or the GM makes for you – using that one sense. Acute Hearing gives you a bonus to hear something, or to notice a sound (for instance, someone taking the safety off a gun in the dark).",
    subCategories: [{
        name: "Acute Taste and Smell",
        text: "Gives you a bonus to notice a taste or smell (for instance, poison in your drink).",
        points: "2 points/level"
    }, {
        name: "Acute Touch",
        text: "Gives you a bonus to detect something by touch (for instance, a concealed weapon when patting down a suspect).",
        points: "2 points/level"
    }, {
        name: "Acute Vision",
        text: "Gives you a bonus to spot things visually, and whenever you do a visual search (for instance, looking for traps or footprints).",
        points: "2 points/level"
    }],
    extraText: "With the GM’s permission, you may also buy Acute Sense advantages for specialized senses such as Scanning Sense and Vibration Sense. You cannot usually buy Acute Senses in play – raise your Perception instead. However, if you lose a sense, the GM may allow you to spend earned points on other Acute Senses to compensate. For instance, if you are blinded, you might acquire Acute Hearing."
}
