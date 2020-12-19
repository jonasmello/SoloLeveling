// Paladin.SoloLeveling.js config file
// select your build
var finalBuild = "Hammerdin";
//var finalBuild = "Smiter";

function LoadConfig () {
	Scripts.UserAddon = false; // !!!YOU MUST SET THIS TO FALSE IF YOU WANT TO RUN BOSS/AREA SCRIPTS!!!
	Scripts.SoloLeveling = true; // *** Leveling Script turn off when ready ***

	//  *** Do not turn on Boss/area scripts while SoloLeveling is active!!!!! ***
	// *** act 1 ***
	Scripts.Corpsefire = false;
	Config.Corpsefire.ClearDen = false;
	Scripts.Mausoleum = false;
	Config.Mausoleum.KillBloodRaven = false;
	Config.Mausoleum.ClearCrypt = false;
	Scripts.Rakanishu = false;
	Config.Rakanishu.KillGriswold = true;
	Scripts.UndergroundPassage = false;
	Scripts.Coldcrow = false;
	Scripts.Tristram = false;
	Config.Tristram.WalkClear = false; // Disable teleport while clearing to protect leechers
	Config.Tristram.PortalLeech = false; // Set to true to open a portal for leechers.
	Scripts.Pit = false;
	Config.Pit.ClearPit1 = true;
	Scripts.Treehead = false;
	Scripts.Smith = false;
	Scripts.BoneAsh = false;
	Scripts.Countess = false;
	Config.Countess.KillGhosts = false;
	Scripts.Andariel = false;
	Scripts.Cows = false;
	// *** act 2 ***
	Scripts.Radament = false;
	Scripts.Coldworm = false;
	Config.Coldworm.KillBeetleburst = false;
	Config.Coldworm.ClearMaggotLair = false; // Clear all 3 levels
	Scripts.AncientTunnels = false;
	Config.AncientTunnels.OpenChest = false; // Open special chest in Lost City
	Config.AncientTunnels.KillDarkElder = false;
	Scripts.Summoner = false;
	Config.Summoner.FireEye = false;
	Scripts.Tombs = false;
	Scripts.Duriel = false;
	// *** act 3 ***
	Scripts.Stormtree = false;
	Scripts.KurastTemples = false;
	Scripts.Icehawk = false;
	Scripts.Endugu = false;
	Scripts.Travincal = false;
	Config.Travincal.PortalLeech = false; // Set to true to open a portal for leechers.
	Scripts.Mephisto = false;
	Config.Mephisto.MoatTrick = false;
	Config.Mephisto.KillCouncil = false;
	Config.Mephisto.TakeRedPortal = true;
	// *** act 4 ***
	Scripts.OuterSteppes = false;
	Scripts.Izual = false;
	Scripts.Hephasto = false;
	Config.Hephasto.ClearRiver = false; // Clear river after killing Hephasto
	Config.Hephasto.ClearType = 0xF; // 0xF = skip normal, 0x7 = champions/bosses, 0 = all
	Scripts.Vizier = false; // Intended for classic sorc, kills Vizier only.
	Scripts.FastDiablo = false;
	Scripts.Diablo = false;
	Config.Diablo.WalkClear = false; // Disable teleport while clearing to protect leechers
	Config.Diablo.Entrance = true; // Start from entrance
	Config.Diablo.SealWarning = "Leave the seals alone!";
	Config.Diablo.EntranceTP = "Entrance TP up";
	Config.Diablo.StarTP = "Star TP up";
	Config.Diablo.DiabloMsg = "Diablo";
	Config.Diablo.SealOrder = ["vizier", "seis", "infector"]; // the order in which to clear the seals. If seals are excluded, they won't be checked unless diablo fails to appear
	Scripts.SealLeader = false; // Clear a safe spot around seals and invite leechers in. Leechers should run SealLeecher script. Don't run with Diablo or FastDiablo.
	// *** act 5 ***
	Scripts.Pindleskin = false;
	Config.Pindleskin.UseWaypoint = false;
	Config.Pindleskin.KillNihlathak = true;
	Config.Pindleskin.ViperQuit = false; // End script if Tomb Vipers are found.
	Scripts.Nihlathak = false;
	Config.Nihlathak.ViperQuit = false; // End script if Tomb Vipers are found.
	Scripts.Eldritch = false;
	Config.Eldritch.OpenChest = true;
	Config.Eldritch.KillShenk = true;
	Config.Eldritch.KillDacFarren = true;
	Scripts.Eyeback = false;
	Scripts.SharpTooth = false;
	Scripts.ThreshSocket = false;
	Scripts.Abaddon = false;
	Scripts.Frozenstein = false;
	Config.Frozenstein.ClearFrozenRiver = true;
	Scripts.Bonesaw = false;
	Config.Bonesaw.ClearDrifterCavern = false;
	Scripts.Snapchip = false;
	Config.Snapchip.ClearIcyCellar = true;
	Scripts.Worldstone = false;
	Scripts.Baal = false;
	Config.Baal.HotTPMessage = "Hot TP!";
	Config.Baal.SafeTPMessage = "Safe TP!";
	Config.Baal.BaalMessage = "Baal!";
	Config.Baal.SoulQuit = false; // End script if Souls (Burning Souls) are found.
	Config.Baal.DollQuit = false; // End script if Dolls (Undead Soul Killers) are found.
	Config.Baal.KillBaal = true; // Kill Baal. Leaves game after wave 5 if false.

	// Pickit config. Default folder is kolbot/pickit.
	//	Config.PickitFiles.push("kolton.nip");
	//	Config.PickitFiles.push("LLD.nip");

	// Gambling config
	Config.Gamble = true;
	Config.GambleGoldStart = 2000000;
	Config.GambleGoldStop = 750000;

	// List of item names or classids for gambling. Check libs/NTItemAlias.dbl file for other item classids.
	Config.GambleItems.push("Amulet");
	Config.GambleItems.push("Ring");
	//	Config.GambleItems.push("Circlet");
	//	Config.GambleItems.push("Coronet");

	// Automule settings
	Config.AutoMule.Trigger = [];
	Config.AutoMule.Force = [];
	Config.AutoMule.Exclude = [
		"[name] >= elrune && [name] <= lemrune",
		"[Name] == Mephisto'sSoulstone",
		"[Name] == HellForgeHammer",
		"[Name] == ScrollOfInifuss",
		"[Name] == KeyToTheCairnStones",
		"[name] == BookOfSkill",
		"[Name] == HoradricCube",
		"[Name] == ShaftOfTheHoradricStaff",
		"[Name] == TopOfTheHoradricStaff",
		"[Name] == HoradricStaff",
		"[Name] == ajadefigurine",
		"[Name] == TheGoldenBird",
		"[Name] == potionoflife",
		"[Name] == lamesen'stome",
		"[Name] == Khalim'sEye",
		"[Name] == Khalim'sHeart",
		"[Name] == Khalim'sBrain",
		"[Name] == Khalim'sFlail",
		"[Name] == Khalim'sWill",
		"[Name] == ScrollofResistance",
	];

	// Town settings
	Config.HealHP = 99;
	Config.HealMP = 99;
	Config.HealStatus = true;
	Config.UseMerc = true;
	Config.MercWatch = true;
	Config.ClearInvOnStart = false;

	// Potion settings
	Config.UseHP = 75;
	Config.UseRejuvHP = 65;
	Config.UseMP = 15;
	Config.UseMercHP = 75;
	Config.HPBuffer = 0;
	Config.MPBuffer = 0;
	Config.RejuvBuffer = 0;

	// Chicken settings
	Config.LifeChicken = 10;
	Config.ManaChicken = 0;
	Config.MercChicken = 0;
	Config.TownHP = 0;
	Config.TownMP = 0;

	/* Inventory lock configuration. */
	Config.Inventory[0] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	Config.Inventory[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	Config.Inventory[2] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	Config.Inventory[3] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

	Config.StashGold = me.charlvl * 100;
	Config.LowGold = 300000;

	//AutoEquip
	Config.AutoEquip = true;

	// Pickit config.
	Config.PickRange = me.diff === 0 ? 10 : me.diff === 1 ? 20 : 40;
	Config.FastPick = true;
	Config.ItemInfo = true;
	Config.CainID.Enable = false;
	Config.FieldID = false;

	// Manager Item Log Screen
	Config.LogKeys = true;
	Config.LogOrgans = true;
	Config.LogMiddleRunes = true;
	Config.LogHighRunes = true;
	Config.ShowCubingInfo = true;

	// General config
	Config.MinGameTime = 400;
	Config.MaxGameTime = 7200;
	Config.MiniShopBot = true;
	Config.PacketShopping = true; // Use packets to shop. Improves shopping speed.
	Config.TownCheck = me.findItem("tbk", 0, 3);
	Config.LogExperience = true; // Print experience statistics in the manager.
	Config.PingQuit = [{Ping: 600, Duration: 10}];
	Config.Silence = true;
	Config.OpenChests = me.diff === 2 ? 2 : true;

	// Shrine Scanner - scan for shrines while moving.
	Config.ScanShrines = [15, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14];

	// Primary Slot - Bot will try to determine primary slot if not used (non-cta slot that's not empty)
	Config.PrimarySlot = 0;

	// Fastmod config
	Config.FCR = 0; // 0 - disable, 1 to 255 - set value of faster cast rate
	Config.FHR = 0; // 0 - disable, 1 to 255 - set value of faster hit recovery
	Config.FBR = 0; // 0 - disable, 1 to 255 - set value of faster block recovery
	Config.IAS = 0; // 0 - disable, 1 to 255 - set value of increased attack speed
	Config.PacketCasting = 1; // 0 = disable, 1 = packet teleport, 2 = full packet casting.
	Config.WaypointMenu = true;

	// Monster skip config
	Config.SkipException = []; // vizer, de seis, infector
	Config.SkipEnchant = [];
	Config.SkipAura = [];

	// Attack config
	Config.AttackSkill = [0, 0, 0, 0, 0, 0, 0];
	Config.LowManaSkill = [0, 0];

	Config.MinColumn = [ 3, 3, 0, 0];
	Config.BeltColumn = ["hp", "mp", "rv", "rv"];

	Config.MaxAttackCount = 1000;
	Config.BossPriority = true;
	Config.ClearType = 0;
	Config.ClearPath = {
		Range: 9,
		Spectype: 0,
	};

	//Runewords, Cubing, & Crafting
	Config.Cubing = me.gametype === 1 ? me.getItem(549) : false;
	Config.MakeRunewords = me.gametype === 1 ? true : false;

	//AutoStat
	Config.AutoStat.Enabled = true;
	Config.AutoStat.Save = 0;
	Config.AutoStat.BlockChance = 75;
	Config.AutoStat.UseBulk = true;

	//AutoSkill
	Config.AutoSkill.Enabled = true;
	Config.AutoSkill.Save = 0;

	//AutoBuild
	Config.AutoBuild.Enabled = true;
	Config.AutoBuild.Verbose = true;
	Config.AutoBuild.DebugMode = true;

	// Class specific config
	Config.AvoidDolls = true;
	Config.Vigor = true;
	Config.Charge = true;
	Config.Redemption = [45, 25];

	/*-----------------------------------------*/
	//			DO NOT TOUCH BELOW 			   //
	/*-----------------------------------------*/
	if (Scripts.SoloLeveling === true) {
		if (!isIncluded("common/Storage.js")) {
			include("common/Storage.js");
		}

		if (!isIncluded("common/Misc.js")) {
			include("common/Misc.js");
		}

		if (!isIncluded("NTItemParser.dbl")) {
			include("NTItemParser.dbl");
		}

		if (!isIncluded("bots/SoloLeveling.js")) {
			include("bots/SoloLeveling.js");
		}

		this.configBelt = function () {
			let numColumns = Math.max(1, Storage.BeltSize() - 1);

			for (let i = 0; i < Config.BeltColumn.length; i++) {
				if (Config.BeltColumn[i] === "rv") {
					Config.MinColumn[i] = 0;
				} else {
					Config.MinColumn[i] = numColumns;
				}
			}
		};

		var specPush = function (specType) {
			function getBuildTemplate () {
				let buildType;

				if (me.charlvl < respecOne) {
					buildType = startBuild;
				}

				if (me.charlvl >= respecOne && me.charlvl < respecTwo) {
					buildType = middleBuild;
				}

				if (me.charlvl >= respecTwo) {
					buildType = finalBuild;
				}

				let build = buildType + "Build" ;
				let classname = ["Amazon", "Sorceress", "Necromancer", "Paladin", "Barbarian", "Druid", "Assassin"][me.classid];
				let template = "SoloLeveling/BuildFiles/" + classname + "." + build + ".js";

				return template.toLowerCase();
			}

			var template = getBuildTemplate();

			if (!include(template)) {
				throw new Error("Failed to include template: " + template);
			}

			let specCheck = [];

			switch (specType) {
			case "skills":
				specCheck = JSON.parse(JSON.stringify(build.skills));	//push skills value from template file
				break;
			case "stats":
				specCheck = JSON.parse(JSON.stringify(build.stats)); //push stats value from template file
				break;
			}

			return specCheck;
		};

		// Character Build Setup
		var startBuild = "Start"; // build ends when reaching respecOne (set in SoloLeveling.js)
		var middleBuild = "Hammerdin"; // starts at respecOne ends when reaching respecTwo
		var playStyle = isCaster ? 'Caster' : 'Melee'; //based on final build
		var chooseBuffer = me.charlvl < 12 ? 0 : me.charlvl < respecOne ? 1 : me.charlvl < respecTwo ? 2 : 3;
		var beltPots = [["hp", "hp", "hp", "hp"], ["hp", "hp", "hp", "mp"], ["hp", "hp", "mp", "mp"], ["hp", "mp", "mp", "rv"]][chooseBuffer];
		Config.BeltColumn = beltPots;
		this.configBelt();
		var bufferHP = [13, 3, 3, 0][chooseBuffer];
		var bufferMP = [0, 6, 6, 0][chooseBuffer];
		var bufferRV = [0, 4, 4, 4][chooseBuffer];
		Config.HPBuffer = bufferHP;
		Config.MPBuffer = bufferMP;
		Config.RejuvBuffer = bufferRV;
		Config.AutoSkill.Build = specPush("skills");
		Config.AutoStat.Build = specPush("stats");
		Config.AutoBuild.Template = me.charlvl < respecOne ? startBuild : me.charlvl < respecTwo ? middleBuild : finalBuild;

		if (me.gametype === 1) { //LOD game gear
			if (!haveItem("sword", "runeword", "Call To Arms")) {
				var CTA = [
					"[Name] == AmnRune # # [MaxQuantity] == 1",
					"[Name] == RalRune # # [MaxQuantity] == 1",
					"[Name] == MalRune",
					"[Name] == IstRune",
					"[Name] == OhmRune",
				];
				NTIP.arrayLooping(CTA);

				if (me.getItem(636)) {
					NTIP.addLine("([Name] == CrystalSword || [Name] == Flail) && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 5 # [MaxQuantity] == 1");
				}

				Config.Runewords.push([Runeword.CallToArms, "Crystal Sword"]);
				Config.Runewords.push([Runeword.CallToArms, "flail"]);
				Config.KeepRunewords.push("[type] == sword || [type] == mace # [plusskillbattleorders] >= 1");
			}

			if (Item.getEquippedItem(1).tier < 315) { // Lore
				if (!haveItem("helm", "runeword", "Lore")) {
					var Lore = [
						"[Name] == OrtRune # # [MaxQuantity] == 1",
						"[Name] == SolRune # # [MaxQuantity] == 1",
						"[Name] == FullHelm && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 2 # [MaxQuantity] == 1",
					];
					NTIP.arrayLooping(Lore);
					Config.Runewords.push([Runeword.Lore, "Full Helm"]);
					Config.Recipes.push([Recipe.Rune, "Ral Rune"]);
					Config.Recipes.push([Recipe.Rune, "Ort Rune"]);
					Config.Recipes.push([Recipe.Rune, "Thul Rune"]);
					Config.Recipes.push([Recipe.Rune, "Amn Rune"]);
				}

				if (Item.getEquippedItem(1).tier < 314) {
					NTIP.addLine("[Name] == DeathMask && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 2 # [MaxQuantity] == 1");
					Config.Runewords.push([Runeword.Lore, "Death Mask"]);
				}

				if (Item.getEquippedItem(1).tier < 313) {
					NTIP.addLine("[Name] == Casque && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 2 # [MaxQuantity] == 1");
					Config.Runewords.push([Runeword.Lore, "Casque"]);
				}

				if (Item.getEquippedItem(1).tier < 312) {
					NTIP.addLine("[Name] == Sallet && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 2 # [MaxQuantity] == 1");
					Config.Runewords.push([Runeword.Lore, "Sallet"]);
				}

				if (Item.getEquippedItem(1).tier < 311) {
					NTIP.addLine("[Name] == Crown && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 2 # [MaxQuantity] == 1");
					Config.Runewords.push([Runeword.Lore, "Crown"]);
				}

				if (Item.getEquippedItem(1).tier < 310) {
					NTIP.addLine("[Name] == BoneHelm && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 2 # [MaxQuantity] == 1");
					Config.Runewords.push([Runeword.Lore, "Bone Helm"]);
				}

				NTIP.addLine("[Name] == GrimHelm && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 2 # [MaxQuantity] == 1");
				Config.Runewords.push([Runeword.Lore, "Grim Helm"]);
				Config.KeepRunewords.push("([type] == circlet || [type] == helm) # [LightResist] >= 25");
			}

			if (Item.getEquippedItem(3).tier < 233) { // Stealth
				if (!haveItem("armor", "runeword", "Stealth")) {
					var stealth = [
						"[Name] == TalRune # # [MaxQuantity] == 1",
						"[Name] == EthRune # # [MaxQuantity] == 1",
						"[Name] == StuddedLeather && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 2 # [MaxQuantity] == 1",
					];
					NTIP.arrayLooping(stealth);
					Config.Runewords.push([Runeword.Stealth, "Studded Leather"]);
				}

				if (Item.getEquippedItem(3).tier < 230) {
					NTIP.addLine("[Name] == BreastPlate && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 2 # [MaxQuantity] == 1");
					Config.Runewords.push([Runeword.Stealth, "Breast Plate"]);
				}

				if (Item.getEquippedItem(3).tier < 231) {
					NTIP.addLine("[Name] == LightPlate && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 2 # [MaxQuantity] == 1");
					Config.Runewords.push([Runeword.Stealth, "Light Plate"]);
				}

				if (Item.getEquippedItem(3).tier < 232) {
					NTIP.addLine("[Name] == GhostArmor && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 2 # [MaxQuantity] == 1");
					Config.Runewords.push([Runeword.Stealth, "Ghost Armor"]);
				}

				NTIP.addLine("[Name] == SerpentskinArmor && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 2 # [MaxQuantity] == 1");
				Config.Runewords.push([Runeword.Stealth, "Serpentskin Armor"]);
				Config.KeepRunewords.push("[type] == armor # [frw] == 25");
			}

			if (Item.getEquippedItem(3).tier < 634) { // Smoke
				if (!haveItem("armor", "runeword", "Smoke")) {
					var Smoke = [
						"[Name] == NefRune # # [MaxQuantity] == 1",
						"[Name] == LumRune # # [MaxQuantity] == 1",
						"[Name] == LightPlate && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 2 # [MaxQuantity] == 1",
					];
					NTIP.arrayLooping(Smoke);
					Config.Runewords.push([Runeword.Smoke, "Light Plate"]);

					if (!me.getItem(626)) { // Cube to Lum Rune
						Config.Recipes.push([Recipe.Rune, "Dol Rune"]); // cube Hel to Io
						Config.Recipes.push([Recipe.Rune, "Hel Rune"]); // cube Hel to Io
						Config.Recipes.push([Recipe.Rune, "Io Rune"]); // cube Io to Lum
					}
				}

				if (Item.getEquippedItem(3).tier < 629) {
					NTIP.addLine("[Name] == DuskShroud && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 2 # [MaxQuantity] == 1");
					Config.Runewords.push([Runeword.Smoke, "Dusk Shroud"]);
				}

				if (Item.getEquippedItem(3).tier < 615) {
					NTIP.addLine("[Name] == MagePlate && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 2 # [MaxQuantity] == 1");
					Config.Runewords.push([Runeword.Smoke, "Mage Plate"]);
				}

				if (Item.getEquippedItem(3).tier < 607) {
					NTIP.addLine("[Name] == trellisedarmor && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 2 # [MaxQuantity] == 1");
					Config.Runewords.push([Runeword.Smoke, "trellised armor"]);
				}

				if (Item.getEquippedItem(3).tier < 605) {
					NTIP.addLine("[Name] == demonhidearmor && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 2 # [MaxQuantity] == 1");
					Config.Runewords.push([Runeword.Smoke, "demonhide armor"]);
				}

				if (Item.getEquippedItem(3).tier < 603) {
					NTIP.addLine("[Name] == SerpentskinArmor && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 2 # [MaxQuantity] == 1");
					Config.Runewords.push([Runeword.Smoke, "Serpentskin Armor"]);
				}

				if (Item.getEquippedItem(3).tier < 602) {
					NTIP.addLine("[Name] == GhostArmor && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 2 # [MaxQuantity] == 1");
					Config.Runewords.push([Runeword.Smoke, "Ghost Armor"]);
				}

				Config.Runewords.push([Runeword.Smoke, "WyrmHide"]);
				Config.KeepRunewords.push("[type] == armor # [fireresist] == 50");
			}

			if (!haveItem("armor", "runeword", "Enigma")) { // Enigma
				var Enigma = [
					"[Name] == JahRune",
					"[Name] == IthRune # # [MaxQuantity] == 1",
					"[Name] == BerRune",
				];
				NTIP.arrayLooping(Enigma);

				if (me.getItem(639) && me.getItem(640)) {
					Config.Runewords.push([Runeword.Enigma, "Mage Plate", Roll.NonEth]);
					Config.Runewords.push([Runeword.Enigma, "DuskShroud", Roll.NonEth]);
					Config.Runewords.push([Runeword.Enigma, "WyrmHide", Roll.NonEth]);
					Config.Runewords.push([Runeword.Enigma, "ScarabHusk", Roll.NonEth]);
				}

				Config.KeepRunewords.push("[type] == armor # [frw] >= 45");
			}

			if (Item.getEquippedItem(5).tier < 924) { // Ancients' Pledge
				if (!haveItem("shield", "runeword", "Ancients' Pledge")) {
					var AncientsPledge = [
						"[Name] == RalRune # # [MaxQuantity] == 1",
						"[Name] == OrtRune # # [MaxQuantity] == 1",
						"[Name] == TalRune # # [MaxQuantity] == 1",
						"[Name] == LargeShield && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 3 # [MaxQuantity] == 1",
					];
					NTIP.arrayLooping(AncientsPledge);
					Config.Runewords.push([Runeword.AncientsPledge, "Large Shield"]);

					if (!me.getItem(618)) {
						Config.Recipes.push([Recipe.Rune, "Ral Rune"]);
					}
				}

				if (Item.getEquippedItem(5).tier < 246) {
					NTIP.addLine("[Name] == KiteShield  && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 3 # [MaxQuantity] == 1");
					Config.Runewords.push([Runeword.AncientsPledge, "Kite Shield"]);
				}

				if (Item.getEquippedItem(5).tier < 498) {
					NTIP.addLine("[Name] == Scutum  && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 3 # [MaxQuantity] == 1");
					Config.Runewords.push([Runeword.AncientsPledge, "Scutum"]);
				}

				if (Item.getEquippedItem(5).tier < 500) {
					NTIP.addLine("[Name] == DragonShield  && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 3 # [MaxQuantity] == 1");
					Config.Runewords.push([Runeword.AncientsPledge, "Dragon Shield"]);
				}

				if (me.diff !== 2) {
					NTIP.addLine("([Name] == Targe || [Name] == Rondache || [Name] == HeraldicShield ||[Name] == AerinShield) && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 3 # [MaxQuantity] == 1");
					Config.Runewords.push([Runeword.AncientsPledge, "Targe"]);
					Config.Runewords.push([Runeword.AncientsPledge, "Rondache"]);
					Config.Runewords.push([Runeword.AncientsPledge, "Heraldic Shield"]);
					Config.Runewords.push([Runeword.AncientsPledge, "Aerin Shield"]);
				}

				NTIP.addLine("([Name] == AkaranTarge || [Name] == AkaranRondache || [Name] == GildedShield ||[Name] == ProtectorShield || [Name] == SacredTarge || [Name] == GrimShield) && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 3 # [MaxQuantity] == 1");
				Config.Runewords.push([Runeword.AncientsPledge, "Akaran Targe"]);
				Config.Runewords.push([Runeword.AncientsPledge, "Akaran Rondache"]);
				Config.Runewords.push([Runeword.AncientsPledge, "Protector Shield"]);
				Config.Runewords.push([Runeword.AncientsPledge, "Gilded Shield"]);
				Config.Runewords.push([Runeword.AncientsPledge, "Sacred Targe"]);

				Config.KeepRunewords.push("([type] == shield || [type] == auricshields) # [fireresist]+[lightresist]+[coldresist]+[poisonresist] >= 187");
			}

			var Treachery = [ // merc Treachery
				"([Name] == MagePlate || [Name] == HellforgePlate || [Name] == KrakenShell || [Name] == ArchonPlate || [Name] == BalrogSkin || [Name] == BoneWeave || [Name] == GreatHauberk || [Name] == LoricatedMail || [Name] == DiamondMail || [Name] == WireFleece || [Name] == ScarabHusk || [Name] == WyrmHide || [Name] == DuskShroud) && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 3 # [MaxQuantity] == 1",
			];
			NTIP.arrayLooping(Treachery);

			if (me.diff !== 0) {
				NTIP.addLine("([Name] == HellforgePlate || [Name] == KrakenShell || [Name] == ArchonPlate || [Name] == BalrogSkin || [Name] == BoneWeave || [Name] == GreatHauberk || [Name] == LoricatedMail || [Name] == DiamondMail || [Name] == WireFleece || [Name] == ScarabHusk || [Name] == WyrmHide || [Name] == DuskShroud) && [Quality] == Normal && [Flag] == Ethereal # [Sockets] == 0");

				Config.Recipes.push([Recipe.Socket.Armor, "Hellforge Plate"]);
				Config.Recipes.push([Recipe.Socket.Armor, "Kraken Shell"]);
				Config.Recipes.push([Recipe.Socket.Armor, "Archon Plate"]);
				Config.Recipes.push([Recipe.Socket.Armor, "Balrog Skin"]);
				Config.Recipes.push([Recipe.Socket.Armor, "BoneWeave"]);
				Config.Recipes.push([Recipe.Socket.Armor, "Great Hauberk"]);
				Config.Recipes.push([Recipe.Socket.Armor, "Loricated Mail"]);
				Config.Recipes.push([Recipe.Socket.Armor, "Diamond Mail"]);
				Config.Recipes.push([Recipe.Socket.Armor, "Wire Fleece"]);
				Config.Recipes.push([Recipe.Socket.Armor, "Scarab Husk"]);
				Config.Recipes.push([Recipe.Socket.Armor, "WyrmHide"]);
				Config.Recipes.push([Recipe.Socket.Armor, "Dusk Shroud"]);
			}

			Config.Runewords.push([Runeword.Treachery, "Mage Plate"]);
			Config.Runewords.push([Runeword.Treachery, "Hellforge Plate"]);
			Config.Runewords.push([Runeword.Treachery, "Kraken Shell"]);
			Config.Runewords.push([Runeword.Treachery, "Archon Plate"]);
			Config.Runewords.push([Runeword.Treachery, "Balrog Skin"]);
			Config.Runewords.push([Runeword.Treachery, "BoneWeave"]);
			Config.Runewords.push([Runeword.Treachery, "Great Hauberk"]);
			Config.Runewords.push([Runeword.Treachery, "Loricated Mail"]);
			Config.Runewords.push([Runeword.Treachery, "Diamond Mail"]);
			Config.Runewords.push([Runeword.Treachery, "Wire Fleece"]);
			Config.Runewords.push([Runeword.Treachery, "Scarab Husk"]);
			Config.Runewords.push([Runeword.Treachery, "WyrmHide"]);
			Config.Runewords.push([Runeword.Treachery, "Dusk Shroud"]);

			Config.KeepRunewords.push("[Type] == armor # [ias] == 45 && [coldresist] == 30");

			if (me.ladder > 0) { // Ladder runewords - Spirit Sword/Shield & Insight
				if (Item.getEquippedItem(4).tier < 777) { // Spirit Sword
					if (!haveItem("sword", "runeword", "Spirit")) {
						var SpiritSword = [
							"[Name] == TalRune # # [MaxQuantity] == 1",
							"[Name] == ThulRune # # [MaxQuantity] == 1",
							"[Name] == OrtRune # # [MaxQuantity] == 1",
							"[Name] == AmnRune # # [MaxQuantity] == 1",
							"([Name] == BroadSword || [Name] == CrystalSword || [Name] == LongSword) && [flag] != ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 4 # [MaxQuantity] == 1",
						];
						NTIP.arrayLooping(SpiritSword);

						if (me.diff !== 0) {
							NTIP.addLine("([Name] == BroadSword || [Name] == CrystalSword || [Name] == LongSword) && [flag] != ethereal && [Quality] == Normal # [Sockets] == 0 # [MaxQuantity] == 1");

							Config.Recipes.push([Recipe.Socket.Weapon, "Long Sword"]);
							Config.Recipes.push([Recipe.Socket.Weapon, "Crystal Sword"]);
							Config.Recipes.push([Recipe.Socket.Weapon, "Broad Sword"]);
						}

						if (!me.getItem(620) && me.diff !== 2) { //Amn Rune
							Config.Recipes.push([Recipe.Rune, "Ral Rune"]);
							Config.Recipes.push([Recipe.Rune, "Ort Rune"]);
							Config.Recipes.push([Recipe.Rune, "Thul Rune"]);
						}

						Config.Runewords.push([Runeword.Spirit, "Long Sword"]);
						Config.Runewords.push([Runeword.Spirit, "Crystal Sword"]);
						Config.Runewords.push([Runeword.Spirit, "Broad Sword"]);
						Config.KeepRunewords.push("[type] == sword # [fcr] >= 25 && [maxmana] >= 89");
					}
				}

				if (Item.getEquippedItem(5).tier < 1482) { // Spirit shield
					if (!haveItem("shield", "runeword", "Spirit")) {
						var SpiritShield = [
							"[Name] == TalRune # # [MaxQuantity] == 1",
							"[Name] == ThulRune # # [MaxQuantity] == 1",
							"[Name] == OrtRune # # [MaxQuantity] == 1",
							"[Name] == AmnRune # # [MaxQuantity] == 1",
						];
						NTIP.arrayLooping(SpiritShield);

						if (!me.getItem(620) && me.diff !== 2) { //Amn Rune
							Config.Recipes.push([Recipe.Rune, "Ral Rune"]);
							Config.Recipes.push([Recipe.Rune, "Ort Rune"]);
							Config.Recipes.push([Recipe.Rune, "Thul Rune"]);
						}
					}

					if (me.diff === 2) {
						NTIP.addLine("([Name] == AkaranTarge || [Name] == AkaranRondache || [Name] == GildedShield ||[Name] == ProtectorShield || [Name] == SacredTarge) && [Flag] != Ethereal && [Quality] == Normal # [fireresist] > 20 && [Sockets] == 0 # [MaxQuantity] == 1");

						Config.Recipes.push([Recipe.Socket.Shield, "Akaran Targe"]);
						Config.Recipes.push([Recipe.Socket.Shield, "Akaran Rondache"]);
						Config.Recipes.push([Recipe.Socket.Shield, "Gilded Shield"]);
						Config.Recipes.push([Recipe.Socket.Shield, "Protector Shield"]);
						Config.Recipes.push([Recipe.Socket.Shield, "Sacred Targe"]);
					}

					NTIP.addLine("([Name] == Targe || [Name] == Rondache || [Name] == HeraldicShield ||[Name] == AerinShield || [Name] == AkaranTarge || [Name] == AkaranRondache || [Name] == GildedShield ||[Name] == ProtectorShield || [Name] == SacredTarge) && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [fireresist] > 0 && [Sockets] == 4 # [MaxQuantity] == 1");
					Config.Runewords.push([Runeword.Spirit, "Targe"]);
					Config.Runewords.push([Runeword.Spirit, "Rondache"]);
					Config.Runewords.push([Runeword.Spirit, "Heraldic Shield"]);
					Config.Runewords.push([Runeword.Spirit, "Aerin Shield"]);
					Config.Runewords.push([Runeword.Spirit, "Akaran Targe"]);
					Config.Runewords.push([Runeword.Spirit, "Akaran Rondache"]);
					Config.Runewords.push([Runeword.Spirit, "Protector Shield"]);
					Config.Runewords.push([Runeword.Spirit, "Gilded Shield"]);
					Config.Runewords.push([Runeword.Spirit, "Sacred Targe"]);

					Config.KeepRunewords.push("([type] == shield || [type] == auricshields) # [fcr] >= 25 && [maxmana] >= 89");
				}

				// merc Insight
				var Insight = [
					"([Name] == thresher || [Name] == crypticaxe || [Name] == greatpoleaxe || [Name] == giantthresher) && [Flag] == Ethereal && [Quality] == Normal # [Sockets] == 0 # [MaxQuantity] == 1",
					"([Name] == thresher || [Name] == crypticaxe || [Name] == greatpoleaxe || [Name] == giantthresher) && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 4 # [MaxQuantity] == 1",
				];
				NTIP.arrayLooping(Insight);

				if (me.diff !== 2) {
					NTIP.addLine("([Name] == bill || [Name] == battlescythe || [Name] == partizan || [Name] == grimscythe) && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 4 # [MaxQuantity] == 1");
				}

				Config.Recipes.push([Recipe.Socket.Weapon, "thresher"]);
				Config.Recipes.push([Recipe.Socket.Weapon, "Cryptic Axe"]);
				Config.Recipes.push([Recipe.Socket.Weapon, "Great Poleaxe"]);
				Config.Recipes.push([Recipe.Socket.Weapon, "Giant Thresher"]);

				Config.Runewords.push([Runeword.Insight, "Bill"]);
				Config.Runewords.push([Runeword.Insight, "Battle Scythe"]);
				Config.Runewords.push([Runeword.Insight, "Partizan"]);
				Config.Runewords.push([Runeword.Insight, "Grim Scythe"]);
				Config.Runewords.push([Runeword.Insight, "Thresher"]);
				Config.Runewords.push([Runeword.Insight, "Cryptic Axe"]);
				Config.Runewords.push([Runeword.Insight, "Great Poleaxe"]);
				Config.Runewords.push([Runeword.Insight, "Giant Thresher"]);

				Config.KeepRunewords.push("[type] == polearm # [meditationaura] >= 12");
			}
		}

		switch (playStyle) { // finalbuilld autoequip setuip
		case 'Melee':
			if (!haveItem("mace", "runeword", "Black") && me.charlvl >= respecTwo) {
				var Black = [
					"[Name] == ThulRune # # [MaxQuantity] == 1",
					"[Name] == IoRune # # [MaxQuantity] == 1",
					"[Name] == NefRune # # [MaxQuantity] == 1",
					"([Name] == Flail || [Name] == Knout) && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 3 # [MaxQuantity] == 1",
				];
				NTIP.arrayLooping(Black);

				Config.Runewords.push([Runeword.Black, "Flail"]);
				Config.Runewords.push([Runeword.Black, "Knout"]);
				Config.KeepRunewords.push("[Type] == mace # [ias] == 15 && [itemcrushingblow] == 40");
			}

			var finalMELEE = [
				//weapon
				"[Type] == mace && [flag] == runeword # [ias] == 15 && [itemcrushingblow] == 40 # [tier] == 100000", //Black
				//helmet
				"[name] == wingedhelm && [quality] == set && [flag] != ethereal # [fhr] >= 30 # [tier] == 100000", // gface
				//belt
				"[name] == warbelt && [quality] == unique && [flag] != ethereal # [enhanceddefense] >= 160  # [tier] == 100000", //tgods
				//boots
				"[name] == lightplatedboots && [quality] == unique && [flag] != ethereal # [enhanceddefense] >= 50 # [tier] == 100000", //goblin toes
				//armor
				"[type] == armor && [flag] != ethereal && [flag] == runeword # [frw] >= 45 # [tier] == 100000", //Enigma
				//shield
				"[Name] == GildedShield && [Quality] == unique && [flag] != ethereal  # [EnhancedDefense] >= 185 # [tier] == 100000", //hoz
				//gloves
				"[name] == vampirebonegloves && [quality] == unique && [flag] != ethereal # [enhanceddefense] >= 100 && [strength] >= 12 && [lifeleech] >= 9  # [tier] == 100000", // drac's
				//ammy
				"[type] == amulet && [quality] == unique # [lightresist] == 35 # [tier] == 100000", //highlords
				//rings
				"[type] == ring && [quality] == unique # [tohit] >= 180 && [dexterity] >= 15 # [tier] == 99000", // ravenfrost
				"[type] == ring && [quality] == unique # [lifeleech] >= 3 && [maxstamina] == 50 # [tier] == 100000", // bul-kathos' wedding band
			];
			NTIP.arrayLooping(finalMELEE);

			break;
		case 'Caster':
			if (!haveItem("mace", "runeword", "Heart of the Oak")) {
				var HotO = [
					"[Name] == ThulRune # # [MaxQuantity] == 1",
					"[Name] == PulRune",
					"[Name] == KoRune # # [MaxQuantity] == 1",
					"[Name] == VexRune",
				];
				NTIP.arrayLooping(HotO);

				if (me.getItem(635)) {
					NTIP.addLine("([Name] == Flail || [Name] == Knout) && [Flag] != Ethereal && [Quality] >= Normal && [Quality] <= Superior # [Sockets] == 4 # [MaxQuantity] == 1");
				}

				if (!me.getItem(635)) {
					Config.Recipes.push([Recipe.Rune, "Um Rune"]);
					Config.Recipes.push([Recipe.Rune, "Mal Rune"]);
					Config.Recipes.push([Recipe.Rune, "Ist Rune"]);
					Config.Recipes.push([Recipe.Rune, "Gul Rune"]);
				}

				Config.Runewords.push([Runeword.HeartoftheOak, "Knout"]);
				Config.Runewords.push([Runeword.HeartoftheOak, "Flail"]);
				Config.KeepRunewords.push("[Type] == mace # [FCR] == 40");
			}

			var finalCASTER = [
				//weapon
				"[Type] == mace && [flag] == runeword # [FCR] == 40 # [tier] == 100000", // HotO
				//helmet -- shako
				"[name] == shako && [quality] == unique && [flag] != ethereal # [DamageResist] == 10 # [tier] == 100000", // harlequin's crest
				//belt
				"[name] == spiderwebsash && [quality] == unique && [flag] != ethereal # [enhanceddefense] >= 90 # [tier] == 100000", //arach's
				//boots -- using War Traveler's
				"[name] == battleboots && [quality] == unique && [flag] != ethereal # [itemmagicbonus] >= 50 # [tier] == 100000", //war traveler
				//armor -- using Enigma
				"[type] == armor && [flag] != ethereal && [flag] == runeword # [frw] >= 45 # [tier] == 100000", //Enigma
				//shield -- using HoZ
				"[Name] == GildedShield && [Quality] == unique && [flag] != ethereal # [EnhancedDefense] >= 185 # [tier] == 100000", //hoz
				//gloves -- using Magefist
				"[name] == lightgauntlets && [quality] == unique && [flag] != ethereal # [fcr] >= 20 # [tier] == 100000",
				//ammy
				"[type] == amulet && [quality] == unique # [strength] == 5 && [coldresist] >= 30 # [tier] == 100000", //maras
				//rings
				"[name] == ring && [quality] == unique # [maxhp] >= 40 && [magicdamagereduction] >= 12 # [tier] == 99000", // dwarfstar
				"[type] == ring && [quality] == unique # [itemmaxmanapercent] == 25 # [tier] == 100000", //soj
			];
			NTIP.arrayLooping(finalCASTER);

			break;
		}

		var autoequipTiers = [ // dynamic tiers autoequip setup
			//weapon
			"([Type] == Scepter || [Type] == Mace && [Quality] >= Magic || [Type] == Sword && ([Quality] >= Magic || [flag] == runeword) || [Type] == knife && [Quality] >= Magic) && [flag] != ethereal # [itemchargedskill] >= 0 # [tier] == tierscore(item)",
			//Helmet
			"([type] == helm || [type] == circlet) && ([Quality] >= Magic || [flag] == runeword) && [flag] != ethereal # [itemchargedskill] >= 0 # [tier] == tierscore(item)",
			//belt
			"[type] == belt && [Quality] >= Magic && [flag] != ethereal # [itemchargedskill] >= 0 # [tier] == tierscore(item)",
			//boots
			"[Type] == Boots && [Quality] >= Magic && [Flag] != Ethereal # [itemchargedskill] >= 0 # [tier] == tierscore(item)",
			//armor
			"[type] == armor && ([Quality] >= Magic || [flag] == runeword) && [Flag] != Ethereal # [itemchargedskill] >= 0 # [tier] == tierscore(item)",
			//shield
			"([type] == shield || [type] == auricshields) && ([Quality] >= Magic || [flag] == runeword) && [flag] != ethereal # [itemchargedskill] >= 0 # [tier] == tierscore(item)",
			//gloves
			"[Type] == Gloves && [Quality] >= Magic && [flag] != ethereal # [itemchargedskill] >= 0 # [tier] == tierscore(item)",
			//ammy
			"[Type] == Amulet && [Quality] >= Magic # [itemchargedskill] >= 0 # [tier] == tierscore(item)",
			//rings
			"[Type] == Ring && [Quality] >= Magic # [itemchargedskill] >= 0 # [tier] == tierscore(item)",
		];
		NTIP.arrayLooping(autoequipTiers);
	}
}
