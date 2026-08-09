---
publish: true
---
# Rolling and DCs
Not everything always goes to plan, fate can always swing one way or another. This is represented by the use of dice. There are several types of rolls listed as follows:
- Saves (1d20 + [[00 Characters#^91b5a0|Ability]]/[[00 Characters#^50f785|Skill Score]] vs. DC) ^40aef1
- Contests (1d20 + [[00 Characters#^91b5a0|Ability]]/[[00 Characters#^50f785|Skill Score]] vs. 1d20 + [[00 Characters#^91b5a0|Ability]]/[[00 Characters#^50f785|Skill Score]]) ^0ee214

Save DCs are either determined by the GM or by taking the afflicted character’s relevant [[00 Characters#^91b5a0|Ability Score]], then adding 10 (i.e., a Strength of 4 would create a DC of 14.)
# Advantage and Disadvantage
Advantage *allows* you to reroll the affected d20 roll and take the desired roll. Disadvantage *requires* you to reroll the affected d20 roll and take the lowest result. ^5510db

Multiple instances of Advantage or Disadvantage can stack, but not exist at the same time. A single instance of Advantage negates a single instance of Disadvantage, and vice versa.
# Criticals
Whenever a player would roll an unmodified 20, it is counted as a Critical.
- [[01 Combat#^80b511|Attacking]], you roll double dice for damage.
- [[01 Combat#^80b511|Defending]], you gain +1 [[01 Combat#^72491d|AP]].
- Advancing [[00 Characters#^35acfd|Challenge Clocks]], you get a [[00 Characters#^a061fc|Breakthrough]] and +1 segment filled.
# Rounds, Turns, and Initiative
A round is approximately 10 seconds total with every turn occurring within that time frame. Each player and NPC in a scene will have a turn within a round. At the start of each round, the initial order of turns (Initiative Order) is determined by rolling a Dexterity [[01 Combat#^0ee214|Contest]]. ^0dc1bc
# Action Points
Nearly every action that a character can perform costs 1 Action Point (AP), 3 AP is gained at the start of every round, after determining [[01 Combat#^0dc1bc|Initiative Order]]. Any unspent AP is carried over to your next turn, up to your maximum of 5. AP can be spent to perform the following actions: ^72491d
- [[01 Combat#^80b511|Attack]]
- [[01 Combat#^af6cbd|Move]]
- [[01 Combat#^0b6999|Pivot]]
- [[01 Combat#^be2dd8|Interaction]]
- [[01 Combat#^bfe9ae|Cast]]
# Attacking and Defending
Attacking is done by rolling a 1d20 + [[00 Characters#^91b5a0|Ability Score]]. The [[00 Characters#^91b5a0|Ability Score]] used for both attacking and defending is determined based on the weapon the attack is being made with unless specified elsewhere. The steps listed below explain how attacking and defending are carried out. ^80b511
1. The attacker expends [[01 Combat#^72491d|AP]], states the weapon and [[01 Combat#^eb9045|Maneuver]] they are using, and declares a valid target(s) within range, then the attacker rolls.
2. If attacking a defender who is [[01 Combat#^735ba4|Facing]] you, the defender may expend 1 [[01 Combat#^72491d|AP]] to:
	1. **Block**: reduce the incoming damage by a roll of your weapon’s damage dice. ^10e656
	2. **Evade**: move half your Speed in Paces horizontally after damage would be dealt. ^da09d9
	3. **Counter**: if you won the [[01 Combat#^0ee214|Contest]], reroll. If you still win the [[01 Combat#^0ee214|Contest]], roll damage (without a modifier) against an attacker within range. ^a2579d
3. The defender rolls.
4. If successful, the attacker rolls damage (including the [[00 Characters#^91b5a0|Ability Score]] used to make the attack) and states the damage type they are dealing, which is reduced by Block, then DR.
# Maneuvers
A Maneuver is a variation of any standard attack taken during your turn, provided your target is within range of the weapon being used. Everyone can perform them with Unarmed weapons, but [[00 Characters#^7f706f|Abilities]] are required to perform them with any other weapon type. Unless specified elsewhere, the Contest used for a Maneuver is determined by the weapon. You must be wielding at least one Unarmed weapon to perform the following Maneuvers: ^eb9045
- **Grapple**: The defender has the [[04 Conditions#^6dd9a3|Tethered]] (1) condition applied to them with the attacker as the source. This condition can be ended by the defender performing an [[01 Combat#^be2dd8|Interaction]] on their turn and succeeding in a Strength vs. Strength [[01 Combat#^0ee214|Contest]] against the attacker.
- **Trip**: The defender suffers Slowed with Persist (1).
- **Disarm**: The target is forced to drop an item held in their hand (attacker’s choice) within one Pace of themselves (attacker’s choice).
- **Push/Pull**: The attacker moves the defender horizontally by two Paces (attacker’s choice).

More Maneuvers can be learned by spending [[00 Characters#^a3418c|EXP]] on [[00 Characters#^7f706f|Abilities]] to learn them.
# Threatened
The squares in front of a character, in the direction they are facing, and within range of their currently held weapon are considered Threatened; this excludes Ranged weapons. ^85496d
# Movement and Pivoting

^735ba4

On your turn, you can expend 1 [[01 Combat#^72491d|AP]] to gain movement equal to the character’s Speed. When you expend [[01 Combat#^72491d|AP]] to take the Move action, you can freely change where you are facing (this is not Pivoting). Every other diagonal taken costs two Paces. A character cannot move through another’s occupied space. If you expend AP during your Move action, the remainder of your movement is wasted.^af6cbd

Additionally, at the start of your turn, if you are not on a [[01 Combat#^85496d|Threatened]] space you can take Movement equal to your Speed without expending [[01 Combat#^72491d|AP]].

Pivoting allows you to change the direction a character is facing. A defender can choose to expend 1 [[01 Combat#^72491d|AP]] to Pivot after an attack is resolved or at the start of anyone’s turn. ^0b6999

A Pace is approximately a yard, meter, etc. It is typically represented by 1 'space' (block, tile, square, etc). ^a84b30

If you are forced to move, but terrain or another character would block you, the forced movement that failed is converted into bludgeoning damage.
- For terrain, take 1d6 damage for every space you would have moved.
- For terrain you were spawned inside of, take 1d6 damage for every space you had to move to no longer be in terrain. You take this movement at the end of the current turn freely and it must be the shortest path possible.
- For characters, both take half of 1d6 damage for every pace you would have moved.
# Interaction
All things listed here consume at least 1 AP to perform, if it is unlisted the GM will specify or it is assumed to be able to be done freely within reason. ^be2dd8
- Picking up an item from the ground. 
	- Each [[05 Equipment#^9b784f|Bulk]] (#) of an item costs that amount (#) of AP to pick up.
- Unlocking a door that you have the key to.
- Swapping a drawn weapon with another one.
- Saddling a horse you are standing next to.
- Speaking an additional 25 words.
- Reducing a single Condition's Persist by 1 for a target within Touch.
# Casting
You can Cast spells you have created when using the rest action [[01b Resting#^9e286e|Delve the Arcane]], the [[01 Combat#^72491d|AP]] cost is listed on each spell. All spells require line of sight from the caster to their target. ^bfe9ae
# Wait
This action costs no [[01 Combat#^72491d|AP]] and cannot be taken unless no [[01 Combat#^72491d|AP]] has or will be spent on their turn. Immediately skip the remainder of the turn and gain +1 [[01 Combat#^72491d|AP]]. On the next round, you roll your Dexterity [[01 Combat#^0ee214|Contest]] to determine [[01 Combat#^0dc1bc|Initiative Order]] with [[01 Combat#^5510db|Advantage]] (1).
# Attacking a Stagnant Target
You can elect to attack an unmoving target (the ground, a wall, a table), the DC for the [[01 Combat#^40aef1|Save]] is equal to the number of [[01 Combat#^a84b30|Paces]] away it is from you, plus five. Inanimate objects have HP and DRs.
# Speaking
You can freely speak a total of 25 words every round, resetting at the start of your turn.