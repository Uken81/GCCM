//Add advantage name to selected advantages container and add ID.
let selectedAdvantageArray = [];

function addToSelectedArray(objectName) {
    selectedAdvantageArray.push(objectName.title);    
}






















//............A
let absoluteDirection = {
    title: "Absolute Direction",
    points: "5 or 10 points",
    description: "You have an excellent sense of direction.This ability comes in two levels:",
    subCategory1: {
      name: "Absolute Direction",
      text: "You always know which way is north, and you can always retrace a path you have followed within the past month, no matter how faint or confusing. This ability does not work in environments such as interstellar space or the limbo of the astral plane, but it does work underground, underwater, and on other planets. This gives +3 to Body Sense and Navigation (Air, Land, or Sea).<br> (Note: The navigational sense that guides migratory creatures to their destination is too crude to qualify; treat it as a 0-point feature.)",
      sub1Points: "5 points"
    },
    subCategory2: {
      name: "3D Spatial Sense",
      text: "As above, but works in three dimensions. This ability is useful in deep space – although it does not help you if you travel across dimensions. You get the skill bonuses to Piloting and +2 to Aerobatics, Free Fall, and Navigation (Hyperspace or Space).",
      sub2Points: "10 points"
    }
  }
  
  let absoluteTiming = {
    title: "AbsoluteTiming",
    points: "2 or 5 points",
    description: "You have an accurate mental clock. This ability comes in two levels, both of which are somewhat cinematic:",
    subCategory1: {
      name: "Absolute Timing",
      text: "You always know what time it is, with a precision equal to the best personal timepieces widely available in your culture (but never better than a few seconds). You can measure elapsed time with equal accuracy. Neither changes of time zone nor sleep interferes with this ability, and you can wake up at a predetermined time if you choose. Being knocked unconscious, hypnotized, etc. may prevent this advantage from working, and time travel will confuse you until you find out what the “new” time is. ",
      sub1Points: "2 points"
    },
    subCategory2: {
      name: "Chronolocation",
      text: "As above, but time travel does not interfere – you alwaysknow what time it is in an absolute sense. Note that things like Daylight Savings Time and calendar reform can still confuse you! When you travel in time, the GM may tell you, “You have gone back exactly 92,876.3 days,” and let you – or your character – deal with questions like, “What about leap year?",
      sub2Points: "5 points"
    }
  }
  
  let acuteSenses = {
    title: "Acute Senses",
    points: "2 points/level",
    description: "You have superior senses. Each Acute Sense is a separate advantage that gives +1 per level to all Sense rolls (p. 358) you make – or the GM makes for you – using that one sense. Acute Hearing gives you a bonus to hear something, or to notice a sound (for instance, someone taking the safety off a gun in the dark).",
    subCategory1: {
      name: "Acute Taste and Smell",
      text: "Gives you a bonus to notice a taste or smell (for instance, poison in your drink). 2 points/level.",
      sub1Points: "2 points/level"
    },
    subCategory2: {
      name: "Acute Touch",
      text: "Gives you a bonus to detect something by touch (for instance, a concealed weapon when patting down a suspect).",
      sub2Points: "2 points/level"
    },
    subCategory3: {
      name: "Acute Vision",
      text: "Gives you a bonus to spot things visually, and whenever you do a visual search (for instance, looking for traps or footprints).",
      sub3Points: "2 points/level"
    },
    extraText: "With the GM’s permission, you may also buy Acute Sense advantages for specialized senses such as Scanning Sense and Vibration Sense. You cannot usually buy Acute Senses in play – raise your Perception instead. However, if you lose a sense, the GM may allow you to spend earned points on other Acute Senses to compensate. For instance, if you are blinded, you might acquire Acute Hearing."
  }