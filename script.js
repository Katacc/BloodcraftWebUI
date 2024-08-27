import config from "./config.js";

// Mapping ID:S to Names
const playerNames = {
  [config.PLAYER1_ID]: "Yuki",
  [config.PLAYER2_ID]: "Penumbra",
};

document.addEventListener("DOMContentLoaded", () => {
  const buttonsContainer = document.getElementById("buttonsContainer");

  // Fetch the player data.
  Promise.all([
    fetch(
      "../BepInEx/config/Bloodcraft/PlayerLeveling/player_experience.json",
    ).then((response) => response.json()),
    fetch(
      "../BepInEx/config/Bloodcraft/Professions/player_woodcutting.json",
    ).then((response) => response.json()),
    fetch("../BepInEx/config/Bloodcraft/Professions/player_mining.json").then(
      (response) => response.json(),
    ),
    fetch("../BepInEx/config/Bloodcraft/Professions/player_fishing.json").then(
      (response) => response.json(),
    ),
    fetch("../BepInEx/config/Bloodcraft/Professions/player_alchemy.json").then(
      (response) => response.json(),
    ),
    fetch(
      "../BepInEx/config/Bloodcraft/Professions/player_blacksmithing.json",
    ).then((response) => response.json()),
    fetch(
      "../BepInEx/config/Bloodcraft/Professions/player_enchanting.json",
    ).then((response) => response.json()),
    fetch(
      "../BepInEx/config/Bloodcraft/Professions/player_tailoring.json",
    ).then((response) => response.json()),
    fetch(
      "../BepInEx/config/Bloodcraft/Professions/player_harvesting.json",
    ).then((response) => response.json()),
    fetch(
      "../BepInEx/config/Bloodcraft/WeaponExpertise/player_unarmed.json",
    ).then((response) => response.json()),
    fetch(
      "../BepInEx/config/Bloodcraft/WeaponExpertise/player_sword.json",
    ).then((response) => response.json()),
    fetch(
      "../BepInEx/config/Bloodcraft/WeaponExpertise/player_greatsword.json",
    ).then((response) => response.json()),
    fetch("../BepInEx/config/Bloodcraft/WeaponExpertise/player_axe.json").then(
      (response) => response.json(),
    ),
    fetch("../BepInEx/config/Bloodcraft/WeaponExpertise/player_mace.json").then(
      (response) => response.json(),
    ),
    fetch(
      "../BepInEx/config/Bloodcraft/WeaponExpertise/player_pistols.json",
    ).then((response) => response.json()),
    fetch(
      "../BepInEx/config/Bloodcraft/WeaponExpertise/player_longbow.json",
    ).then((response) => response.json()),
    fetch(
      "../BepInEx/config/Bloodcraft/WeaponExpertise/player_crossbow.json",
    ).then((response) => response.json()),
    fetch("../BepInEx/config/Bloodcraft/WeaponExpertise/player_whip.json").then(
      (response) => response.json(),
    ),
    fetch(
      "../BepInEx/config/Bloodcraft/WeaponExpertise/player_reaper.json",
    ).then((response) => response.json()),
    fetch(
      "../BepInEx/config/Bloodcraft/WeaponExpertise/player_slashers.json",
    ).then((response) => response.json()),
    fetch(
      "../BepInEx/config/Bloodcraft/WeaponExpertise/player_fishingpole.json",
    ).then((response) => response.json()),
    fetch(
      "../BepInEx/config/Bloodcraft/WeaponExpertise/player_spear.json",
    ).then((response) => response.json()),
    fetch(
      "../BepInEx/config/Bloodcraft/WeaponExpertise/player_weapon_stats.json",
    ).then((response) => response.json()),
  ])
    .then(
      ([
        experienceData,
        woodcuttingData,
        miningData,
        fishingData,
        alchemyData,
        blacksmithingData,
        enchantingData,
        tailoringData,
        harvestingData,
        unarmedData,
        swordData,
        greatswordData,
        axeData,
        maceData,
        pistolsData,
        longbowData,
        crossbowData,
        whipData,
        reaperData,
        slashersData,
        fishingpoleData,
        spearData,
        statsData,
      ]) => {
        // Create a button for each player in the experience data
        for (const id in experienceData) {
          if (experienceData.hasOwnProperty(id)) {
            const button = document.createElement("button");
            button.textContent = playerNames[id] || `${playerNames[id]}`;
            button.onclick = () =>
              fetchCharacterData(
                id,
                experienceData,
                woodcuttingData,
                miningData,
                fishingData,
                alchemyData,
                blacksmithingData,
                enchantingData,
                tailoringData,
                harvestingData,
                unarmedData,
                swordData,
                greatswordData,
                axeData,
                maceData,
                pistolsData,
                longbowData,
                crossbowData,
                whipData,
                reaperData,
                slashersData,
                fishingpoleData,
                spearData,
                statsData,
              );
            buttonsContainer.appendChild(button);
          }
        }
      },
    )
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error,
      );
    });
});

function fetchCharacterData(
  characterId,
  experienceData,
  woodcuttingData,
  miningData,
  fishingData,
  alchemyData,
  blacksmithingData,
  enchantingData,
  tailoringData,
  harvestingData,
  unarmedData,
  swordData,
  greatswordData,
  axeData,
  maceData,
  pistolsData,
  longbowData,
  crossbowData,
  whipData,
  reaperData,
  slashersData,
  fishingpoleData,
  spearData,
  statsData,
) {
  const resultDiv = document.getElementById("result");

  // Clear previous result
  resultDiv.innerHTML = "";

  const characterExperience = experienceData[characterId];
  const characterWoodcutting = woodcuttingData[characterId];
  const characterMining = miningData[characterId];
  const characterFishing = fishingData[characterId];
  const characterAlchemy = alchemyData[characterId];
  const characterBlacksmithing = blacksmithingData[characterId];
  const characterEnchanting = enchantingData[characterId];
  const characterTailoring = tailoringData[characterId];
  const characterHarvesting = harvestingData[characterId];
  const characterUnarmed = unarmedData[characterId];
  const characterSword = swordData[characterId];
  const characterGreatsword = greatswordData[characterId];
  const characterAxe = axeData[characterId];
  const characterMace = maceData[characterId];
  const characterPistols = pistolsData[characterId];
  const characterLongbow = longbowData[characterId];
  const characterCrossbow = crossbowData[characterId];
  const characterWhip = whipData[characterId];
  const characterReaper = reaperData[characterId];
  const characterSlashers = slashersData[characterId];
  const characterFishingpole = fishingpoleData[characterId];
  const characterSpear = spearData[characterId];
  const characterStats = statsData[characterId];

  if (
    characterExperience &&
    characterWoodcutting &&
    characterMining &&
    characterFishing &&
    characterAlchemy &&
    characterBlacksmithing &&
    characterEnchanting &&
    characterTailoring &&
    characterHarvesting &&
    characterUnarmed &&
    characterSword &&
    characterAxe &&
    characterMace &&
    characterPistols
  ) {
    const level = characterExperience.Key;
    const experience = characterExperience.Value;
    const woodcuttingLevel = characterWoodcutting.Key;
    const woodcuttingXP = characterWoodcutting.Value;
    const miningLevel = characterMining.Key;
    const miningXP = characterMining.Value;

    const fishingLevel = characterFishing.Key;
    const fishingXP = characterFishing.Value;

    const alchemyLevel = characterAlchemy.Key;
    const alchemyXP = characterAlchemy.Value;

    const blacksmithingLevel = characterBlacksmithing.Key;
    const blacksmithingXP = characterBlacksmithing.Value;

    const enchantingLevel = characterEnchanting.Key;
    const enchantingXP = characterEnchanting.Value;

    const tailoringLevel = characterTailoring.Key;
    const tailoringXP = characterTailoring.Value;

    const harvestingLevel = characterHarvesting.Key;
    const harvestingXP = characterHarvesting.Value;

    const unarmedLevel = characterUnarmed.Key;
    const unarmedXP = characterUnarmed.Value;

    const swordLevel = characterSword.Key;
    const swordXP = characterSword.Value;

    const greatswordLevel = characterGreatsword.Key;
    const greatswordXP = characterGreatsword.Value;

    const axeLevel = characterAxe.Key;
    const axeXP = characterAxe.Value;

    const maceLevel = characterMace.Key;
    const maceXP = characterMace.Value;

    const pistolsLevel = characterPistols.Key;
    const pistolsXP = characterPistols.Value;

    const longbowLevel = characterLongbow.Key;
    const longbowXP = characterLongbow.Value;

    const crossbowLevel = characterCrossbow.Key;
    const crossbowXP = characterCrossbow.Value;

    const whipLevel = characterWhip.Key;
    const whipXP = characterWhip.Value;

    const reaperLevel = characterReaper.Key;
    const reaperXP = characterReaper.Value;

    const slashersLevel = characterSlashers.Key;
    const slashersXP = characterSlashers.Value;

    const fishingpoleLevel = characterFishingpole.Key;
    const fishingpoleXP = characterFishingpole.Value;

    const spearLevel = characterSpear.Key;
    const spearXP = characterSpear.Value;

    var swordStats = "";
    var unarmedStats = "";
    var greatswordStats = "";
    var axeStats = "";
    var crossbowStats = "";
    var fishingpoleStats = "";
    var longbowStats = "";
    var maceStats = "";
    var pistolsStats = "";
    var reaperStats = "";
    var slashersStats = "";
    var whipStats = "";
    var spearStats = "";

    function processCategory(jsonObject, category, keyToCheck) {
      if (category in jsonObject) {
        const categoryData = jsonObject[category];

        if (keyToCheck in categoryData) {
          if (keyToCheck === "Sword") {
            swordStats = characterStats.Sword;
          } else if (keyToCheck === "Unarmed") {
            unarmedStats = characterStats.Unarmed;
          } else if (keyToCheck === "GreatSword") {
            greatswordStats = characterStats.GreatSword;
          } else if (keyToCheck === "Axe") {
            axeStats = characterStats.Axe;
          } else if (keyToCheck === "Crossbow") {
            crossbowStats = characterStats.Crossbow;
          } else if (keyToCheck === "FishingPole") {
            fishingpoleStats = characterStats.FishingPole;
          } else if (keyToCheck === "Longbow") {
            longbowStats = characterStats.Longbow;
          } else if (keyToCheck === "Mace") {
            maceStats = characterStats.Mace;
          } else if (keyToCheck === "Pistols") {
            pistolsStats = characterStats.Pistols;
          } else if (keyToCheck === "Reaper") {
            reaperStats = characterStats.Reaper;
          } else if (keyToCheck === "Slashers") {
            slashersStats = characterStats.Slashers;
          } else if (keyToCheck === "Whip") {
            whipStats = characterStats.Whip;
          } else if (keyToCheck === "Spear") {
            spearStats = characterStats.Spear;
          }
        } else {
          console.log(
            `Skipping ${category} because ${keyToCheck} is not found.`,
          );
        }
      } else {
        console.log(`Category ${category} does not exist.`);
      }
    }

    processCategory(characterStats, characterId, "Unarmed");
    processCategory(characterStats, characterId, "Sword");
    processCategory(characterStats, characterId, "GreatSword");
    processCategory(characterStats, characterId, "Axe");
    processCategory(characterStats, characterId, "Mace");
    processCategory(characterStats, characterId, "Pistols");
    processCategory(characterStats, characterId, "Longbow");
    processCategory(characterStats, characterId, "Crossbow");
    processCategory(characterStats, characterId, "Whip");
    processCategory(characterStats, characterId, "Reaper");
    processCategory(characterStats, characterId, "Slashers");
    processCategory(characterStats, characterId, "FishingPole");
    processCategory(characterStats, characterId, "Spear");

    const weaponStats = {
      0: "MaxHP",
      1: "MoveSpeed",
      2: "AttSpeed",
      3: "PhysLeech",
      4: "SpellLeech",
      5: "PrimaryLeech",
      6: "Phys.Power",
      7: "SpellPower",
      8: "PhysCritChance",
      9: "PhysCritDamage",
      10: "SpellCritChance",
      11: "SpellCritDamage",
    };

    const statFormulas = {
      MaxHP: (weaponLevel) => weaponLevel * 2.5,
      MoveSpeed: (weaponLevel) => weaponLevel / 4 / 100,
      AttSpeed: (weaponLevel) => weaponLevel / 10,
      PhysLeech: (weaponLevel) => weaponLevel / 10,
      SpellLeech: (weaponLevel) => weaponLevel / 10,
      PrimaryLeech: (weaponLevel) => weaponLevel / 10,
      PhysPower: (weaponLevel) => weaponLevel / 10,
      SpellPower: (weaponLevel) => weaponLevel / 10,
      PhysCritChance: (weaponLevel) => weaponLevel / 10,
      PhysCritDamage: (weaponLevel) => weaponLevel / 2,
      SpellCritChance: (weaponLevel) => weaponLevel / 10,
      SpellCritDamage: (weaponLevel) => weaponLevel / 2,
    };

    function getWeaponStats(weaponName, weaponLevel) {
      if (weaponName in characterStats) {
        const stats = characterStats[weaponName];
        console.log(`Stats for ${weaponName}:`);
        var statsString = "";

        stats.forEach((statCode) => {
          const statName = weaponStats[statCode];
          var statValue = statFormulas[statName](weaponLevel);
          if (statName.includes("Move")) {
            statValue = statValue.toFixed(2);
          } else if (statName.includes("Crit")) {
            statValue = statValue.toFixed(0);
            //statValue = Math.floor(statValue);
          } else if (statName.includes("Leech")) {
            statValue = statValue.toFixed(0);
            //statValue = Math.floor(statValue);
          } else if (statName.includes("Att")) {
            statValue = statValue.toFixed(0);
          } else {
            statValue = Math.floor(statValue);
          }

          if (statName.includes("Crit")) {
            statValue += "%";
          } else if (statName.includes("Leech")) {
            statValue += "%";
          } else if (statName.includes("Att")) {
            statValue += "%";
          }

          console.log(statName);

          statsString += `<p>${statName}: +${statValue}</p>`;
        });

        return statsString;
      } else {
        console.log(`Weapon ${weaponName} does not exist.`);
        statsString += `<p>No stats..</p><br>`;
        return statsString;
      }
    }

    function parseStatName(jsonObject, stat) {
      if (stat in jsonObject) {
        return jsonObject[stat];
      } else {
        return "Stat not found";
      }
    }

    const swordStatsName = getWeaponStats("Sword", swordLevel);
    const unarmedStatsName = getWeaponStats("Unarmed", unarmedLevel);
    const greatswordStatsName = getWeaponStats("GreatSword", greatswordLevel);
    const axeStatsName = getWeaponStats("Axe", axeLevel);
    const maceStatsName = getWeaponStats("Mace", maceLevel);
    const pistolsStatsName = getWeaponStats("Pistols", pistolsLevel);
    const longbowStatsName = getWeaponStats("Longbow", longbowLevel);
    const crossbowStatsName = getWeaponStats("Crossbow", crossbowLevel);
    const whipStatsName = getWeaponStats("Whip", whipLevel);
    const reaperStatsName = getWeaponStats("Reaper", reaperLevel);
    const slashersStatsName = getWeaponStats("Slashers", slashersLevel);
    const fishingpoleStatsName = getWeaponStats(
      "FishingPole",
      fishingpoleLevel,
    );
    const spearStatsName = getWeaponStats("Spear", spearLevel);

    resultDiv.innerHTML = `

        <div id="skills">
        <p><strong>Skills</strong></p>
            <div id="exp" class="boxed">
                <div id="png">
                    <img id="img" src="Combat_power.png">
                </div>
                <div id="text">
                  <div id="level">
                    <p><strong>Combat power:</strong></p>
                    <p>Level: ${level}</p>
                  </div>
                    <p id="experience">XP: ${experience}</p>
                </div>
            </div>
            <br>
            <div id="woodcutting" class="boxed">
                <div id="png">
                    <img id="img" src="Woodcutting.png">
                </div>
                <div id="text">
                  <div id="level">
                    <p><strong>Woodcutting:</strong></p>
                    <p>Level: ${woodcuttingLevel}</p>
                  </div>
                    <p id="experience">XP: ${woodcuttingXP}</p>

                </div>
            </div>
            <br>
            <div id="mining" class="boxed">
                <div id="png">
                    <img id="img" src="Mining.png">
                </div>
                <div id="text">
                  <div id="level">
                    <p><strong>Mining:</strong></p>
                    <p>Level: ${miningLevel}</p>
                  </div>
                    <p id="experience">XP: ${miningXP}</p>

                </div>
            </div>
            <br>
            <div id="fishing" class="boxed">
                <div id="png">
                    <img id="img" src="Fishing.png">
                </div>
                <div id="text">
                  <div id="level">
                    <p><strong>Fishing:</strong></p>
                    <p>Level: ${fishingLevel}</p>
                  </div>
                    <p id="experience">XP: ${fishingXP}</p>

                </div>
            </div>
            <br>
            <div id="harvesting" class="boxed">
                <div id="png">
                    <img id="img" src="Harvesting.png">
                </div>
                <div id="text">
                  <div id="level">
                    <p><strong>Harvesting:</strong></p>
                    <p>Level: ${harvestingLevel}</p>
                  </div>
                    <p id="experience">XP: ${harvestingXP}</p>

                </div>
            </div>
            <br>
            <div id="alchemy" class="boxed">
                <div id="png">
                    <img id="img" src="Alchemy.png">
                </div>
                <div id="text">
                  <div id="level">
                    <p><strong>Alchemy:</strong></p>
                    <p>Level: ${alchemyLevel}</p>
                  </div>
                    <p id="experience">XP: ${alchemyXP}</p>
                </div>
            </div>
            <br>
            <div id="blacksmithing" class="boxed">
                <div id="png">
                    <img id="img" src="Blacksmithing.png">
                </div>
                <div id="text">
                  <div id="level">
                    <p><strong>Blacksmithing:</strong></p>
                    <p>Level: ${blacksmithingLevel}</p>
                  </div>
                    <p id="experience">XP: ${blacksmithingXP}</p>
                </div>
            </div>
            <br>
            <div id="enchanting" class="boxed">
                <div id="png">
                    <img id="img" src="Enchanting.png">
                </div>
                <div id="text">
                  <div id="level">
                    <p><strong>Enchanting:</strong></p>
                    <p>Level: ${enchantingLevel}</p>
                  </div>
                    <p id="experience">XP: ${enchantingXP}</p>
                </div>
            </div>
            <br>
            <div id="tailoring" class="boxed">
                <div id="png">
                    <img id="img" src="Tailoring.png">
                </div>
                <div id="text">
                  <div id="level">
                    <p><strong>Tailoring:</strong></p>
                    <p>Level: ${tailoringLevel}</p>
                  </div>
                    <p id="experience">XP: ${tailoringXP}</p>
                </div>

            </div>
        </div>

        <div id="weapons">
        <p><strong>Weapons</strong></p>


            <div id="unarmed" class="boxed">
                <div id="png">
                    <img id="img" src="weapons/Unarmed.png">
                </div>
                <div id="text" class="unarmed">
                  <div id="level">
                    <p><strong>Unarmed:</strong></p>
                    <p>Level: ${unarmedLevel}</p>
                  </div>
                    <!--    <p id="experience">Experience: ${unarmedXP}</p> -->
                  <div id="experience" class="stats">
                    <p><strong> Stats: </strong></p> <br>
                    ${unarmedStatsName}
                  </div>
                </div>
            </div>
            <br>
            <div id="sword" class="boxed">
                <div id="png">
                    <img id="img" src="weapons/Sword.png">
                </div>
                <div id="text">
                  <div id="level">
                    <pre><strong>Sword:    </strong></pre>
                    <pre>Level: ${swordLevel}    </pre>
                  </div>
                    <!--    <p id="experience">Experience: ${swordXP}</p> -->
                    <div id="experience" class="stats">
                      <p><strong> Stats: </strong></p> <br>
                      ${swordStatsName}
                    </div>
                </div>
            </div>
            <br>
            <div id="greatsword" class="boxed">
                <div id="png">
                    <img id="img" src="weapons/Greatsword.png">
                </div>
                <div id="text">
                  <div id="level">
                    <pre><strong>   GS:      </strong></pre>
                    <pre>Level: ${greatswordLevel}      </pre>
                  </div>
                    <!--  <p id="experience">Experience: ${greatswordXP}</p> -->
                  <div id="experience" class="stats">
                    <p><strong> Stats: </strong></p> <br>
                    ${greatswordStatsName}
                  </div>
                </div>
            </div>
            <br>
            <div id="axe" class="boxed">
                <div id="png">
                    <img id="img" src="weapons/Axe.png">
                </div>
                <div id="text">
                  <div id="level">
                    <pre><strong>Axe:      </strong></pre>
                    <pre>Level: ${axeLevel}      </pre>
                  </div>
                    <!--  <p id="experience">Experience: ${axeXP}</p> -->
                    <div id="experience" class="stats">
                      <p><strong> Stats: </strong></p> <br>
                      ${axeStatsName}
                    </div>
                </div>
            </div>
            <br>
            <div id="mace" class="boxed">
                <div id="png">
                    <img id="img" src="weapons/Mace.png">
                </div>
                <div id="text">
                  <div id="level">
                    <pre><strong>Mace:      </strong></pre>
                    <pre>Level: ${maceLevel}      </pre>
                  </div>
                    <!--  <p id="experience">Experience: ${maceXP}</p> -->
                    <div id="experience" class="stats">
                      <p><strong> Stats: </strong></p> <br>
                      ${maceStatsName}
                    </div>
                </div>
            </div>
            <br>
            <div id="pistols" class="boxed">
                <div id="png">
                    <img id="img" src="weapons/Pistols.png">
                </div>
                <div id="text">
                  <div id="level">
                    <pre><strong>Pistols:      </strong></pre>
                    <pre>Level: ${pistolsLevel}      </pre>
                  </div>
                    <!--  <p id="experience">Experience: ${pistolsXP}</p> -->
                    <div id="experience" class="stats">
                      <p><strong> Stats: </strong></p> <br>
                      ${pistolsStatsName}
                    </div>
                </div>
            </div>
            <br>
            <div id="longbow" class="boxed">
                <div id="png">
                    <img id="img" src="weapons/Longbow.png">
                </div>
                <div id="text">
                  <div id="level">
                    <p style="font-size: 90%"><strong>Longbow:</strong></p>
                    <p>Level: ${longbowLevel}</p>
                  </div>
                    <!--  <p id="experience">Experience: ${longbowXP}</p> -->
                    <div id="experience" class="stats">
                      <p><strong> Stats: </strong></p> <br>
                      ${longbowStatsName}
                    </div>
                </div>
            </div>
            <br>
            <div id="crossbow" class="boxed">
                <div id="png">
                    <img id="img" src="weapons/Crossbow.png">
                </div>
                <div id="text">
                  <div id="level">
                    <pre style="font-size: 95%"><strong>Crossbow:</strong></pre>
                    <pre>Level: ${crossbowLevel}</pre>
                  </div>
                    <!--  <p id="experience">Experience: ${crossbowXP}</p> -->
                    <div id="experience" class="stats">
                      <p><strong> Stats: </strong></p> <br>
                      ${crossbowStatsName}
                    </div>
                </div>
            </div>
            <br>
            <div id="whip" class="boxed">
                <div id="png">
                    <img id="img" src="weapons/Whip.png">
                </div>
                <div id="text">
                  <div id="level">
                    <pre><strong>Whip:      </strong></pre>
                    <pre>Level: ${whipLevel}      </pre>
                  </div>
                    <!--  <p id="experience">Experience: ${whipXP}</p> -->
                    <div id="experience" class="stats">
                      <p><strong> Stats: </strong></p> <br>
                      ${whipStatsName}
                    </div>
                </div>
            </div>
            <br>
            <div id="reaper" class="boxed">
                <div id="png">
                    <img id="img" src="weapons/Reaper.png">
                </div>
                <div id="text">
                  <div id="level">
                    <pre><strong>Reaper:</strong></pre>
                    <pre>Level: ${reaperLevel}</pre>
                  </div>
                    <!--  <p id="experience">Experience: ${reaperXP}</p> -->
                    <div id="experience" class="stats">
                      <p><strong> Stats: </strong></p> <br>
                      ${reaperStatsName}
                    </div>
                </div>
            </div>
            <br>
            <div id="slashers" class="boxed">
                <div id="png">
                    <img id="img" src="weapons/Slashers.png">
                </div>
                <div id="text">
                  <div id="level">
                    <pre><strong>Slashers:</strong></pre>
                    <pre>Level: ${slashersLevel}</pre>
                  </div>
                    <!--  <p id="experience">Experience: ${slashersXP}</p> -->
                    <div id="experience" class="stats">
                      <p><strong> Stats: </strong></p> <br>
                      ${slashersStatsName}
                    </div>
                </div>
            </div>
            <br>
            <div id="fishingpole" class="boxed">
                <div id="png">
                    <img id="img" src="weapons/Fishingpole.png">
                </div>
                <div id="text">
                  <div id="level">
                    <p><strong>Fishingpole:</strong></p>
                    <p>Level: ${fishingpoleLevel}</p>
                  </div>
                    <!--  <p id="experience">Experience: ${fishingpoleXP}</p> -->
                  <div id="experience" class="stats">
                    <p><strong> Stats: </strong></p> <br>
                    ${fishingpoleStatsName}
                  </div>
                </div>
            </div>
            <br>
            <div id="spear" class="boxed">
                <div id="png">
                    <img id="img" src="weapons/Spear.png">
                </div>
                <div id="text">
                  <div id="level">
                    <pre><strong>Spear:      </strong></pre><br>
                    <pre>Level: ${spearLevel}      </pre>
                  </div>
                  <!--  <p id="experience">Experience: ${spearXP}</p> -->
                  <div id="experience" class="stats">
                      <p><strong> Stats: </strong></p> <br>
                      ${spearStatsName}
                  </div>
                </div>
            </div>
        </div>
        <div id="helpBox">
          <button id="toggleStats">Toggle</button>
        </div>
        `;
  } else {
    resultDiv.innerHTML = `<p>Character ID not found in one or both datasets.</p>`;
  }

  document.getElementById("toggleStats").addEventListener("click", function () {
    const experienceDivs = document.querySelectorAll("#experience");

    experienceDivs.forEach(function (div) {
      const currentDisplay = window.getComputedStyle(div).visibility;
      if (currentDisplay === "hidden") {
        div.style.visibility = "visible";
      } else {
        div.style.visibility = "hidden";
      }
    });
  });
}
