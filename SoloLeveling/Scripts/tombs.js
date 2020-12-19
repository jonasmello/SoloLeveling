/*
*	@filename	SoloLeveling.js
*	@author		isid0re
*	@desc		AutoPlay leveling for any class type. Just make a character and name it. Uses predefined buildtemplates.
*				Make sure kolbot difficulty is set to "highest"
*	@TODO		- dynamic tiers calibrate weights for mercscore and tierscore
*/

function tombs () {
	let tombsLimit = 21;

	if (me.charlvl >= tombsLimit) {
		return true;
	}

	Town.townTasks();
	print('ÿc9SoloLevelingÿc0: starting tombs');
	me.overhead("tombs");
	let tombID = [66, 67, 68, 69, 70, 71, 72];

	for (let number = 0; number < tombID.length; number += 1) {
		if (me.charlvl >= tombsLimit) {
			break;
		}

		if (!Pather.checkWP(46)) {
			Pather.getWP(46);
		} else {
			Pather.useWaypoint(46);
		}

		Precast.doPrecast(true);
		Pather.moveToExit(tombID[number], true, true);

		if (me.area === tombID[number]) {
			for (let i = 0; i < 6; i += 1) {
				try {
					let gbox = getPresetUnit(me.area, 2, 397);
					let orifice = getPresetUnit(me.area, 2, 152);

					if (gbox) {
						if (Pather.moveToPreset(me.area, 2, 397, 0, 0, true)) {
							break;
						}
					} else if (orifice) {
						if (Pather.moveToPreset(me.area, 2, 152, 0, 0, true)) {
							break;
						}
					}
				} catch (e) {
					print('ÿc9SoloLevelingÿc0: Failed to move to ' + Pather.getAreaName(tombID[number]));
				}
			}

			Attack.clear(50);
			Pickit.pickItems();
			Town.goToTown();
			Town.doChores();
		}
	}

	return true;
};
