/*
     _____         _       _       
 ___|     |___ ___| |_ ___| |_ ___ !
| -_|   --| .'| . |  _|  _|   | .'|
|___|_____|__,|  _|_| |___|_|_|__,|
              |_|First Emoji Verification System

ยฉ๏ธCopyright 2021 ~ Healer And Rishabh.
*/


/*--------- Arrays-------------------*/

const e = ["๐" , "๐" , "๐" , "๐" , "๐" , "๐" , "๐คฃ" , "๐" , "๐" , "๐" , "๐" , "๐" , "๐" , "๐ฅฐ" , "๐" , "๐คฉ" , "๐" , "๐" , "โบ๏ธ" , "๐" , "๐" , "๐ฅฒ" , "๐" , "๐" , "๐" , "๐คช" , "๐" , "๐ค" , "๐ค" , "๐คญ" , "๐คซ" , "๐ค" , "๐ค" , "๐คจ" , "๐" , "๐" , "๐ถ" , "๐ถโ๐ซ๏ธ" , "๐" , "๐" , "๐" , "๐ฌ" , "๐ฎโ๐จ" , "๐คฅ" , "๐" , "๐" , "๐ช" , "๐คค" , "๐ด" , "๐ท" , "๐ค" , "๐ค" , "๐คข" , "๐คฎ" , "๐คง" , "๐ฅต" , "๐ฅถ" , "๐ฅด" , "๐ต" , "๐ตโ๐ซ" , "๐คฏ" , "๐ค " , "๐ฅณ" , "๐ฅธ" , "๐" , "๐ค" , "๐ง" , "๐" , "๐" , "๐" , "โน๏ธ" , "๐ฎ" , "๐ฏ" , "๐ฒ" , "๐ณ" , "๐ฅบ" , "๐ฆ" , "๐ง" , "๐จ" , "๐ฐ" , "๐ฅ" , "๐ข" , "๐ญ" , "๐ฑ" , "๐" , "๐ฃ" , "๐" , "๐" , "๐ฉ" , "๐ซ" , "๐ฅฑ" , "๐ค" , "๐ก" , "๐ " , "๐คฌ" , "๐" , "๐ฟ" , "๐" , "โ ๏ธ" , "๐ฉ" , "๐คก" , "๐น" , "๐บ" , "๐ป" , "๐ฝ" , "๐พ" , "๐ค" , "๐บ" , "๐ธ" , "๐น" , "๐ป" , "๐ผ" , "๐ฝ" , "๐" , "๐ฟ" , "๐พ" , "๐" , "๐" , "๐ค" , "๐๏ธ" , "โ" , "๐" , "๐" , "๐ค" , "๐ค" , "โ๏ธ" , "๐ค" , "๐ค" , "๐ค" , "๐ค" , "๐" , "๐" , "๐" , "๐" , "๐" , "โ๏ธ" , "๐" , "๐" , "โ" , "๐" , "๐ค" , "๐ค" , "๐" , "๐" , "๐" , "๐คฒ" , "๐ค" , "๐" , "โ๏ธ" , "๐" , "๐คณ" , "๐ช" , "๐ฆพ" , "๐ฆฟ" , "๐ฆต" , "๐ฆถ" , "๐" , "๐ฆป" , "๐" , "๐ง " , "๐ซ" , "๐ซ" , "๐ฆท" , "๐ฆด" , "๐" , "๐๏ธ" , "๐" , "๐" , "๐ถ" , "๐ง" , "๐ฆ" , "๐ง" , "๐ง" , "๐ฑ" , "๐จ" , "๐ง" , "๐จโ๐ฆฐ" , "๐จโ๐ฆฑ" , "๐จโ๐ฆณ" , "๐จโ๐ฆฒ" , "๐ฉ" , "๐ฉโ๐ฆฐ" , "๐งโ๐ฆฐ" , "๐ฉโ๐ฆฑ" , "๐งโ๐ฆฑ" , "๐ฉโ๐ฆณ" , "๐งโ๐ฆณ" , "๐ฉโ๐ฆฒ" , "๐งโ๐ฆฒ" , "๐ฑโโ๏ธ" , "๐ฑโโ๏ธ" , "๐ง" , "๐ด" , "๐ต" , "๐" , "๐โโ๏ธ" , "๐โโ๏ธ" , "๐" , "๐โโ๏ธ" , "๐โโ๏ธ" , "๐" , "๐โโ๏ธ" , "๐โโ๏ธ" , "๐" , "๐โโ๏ธ" , "๐โโ๏ธ" , "๐" , "๐โโ๏ธ" , "๐โโ๏ธ" , "๐" , "๐โโ๏ธ" , "๐โโ๏ธ" , "๐ง" , "๐งโโ๏ธ" , "๐งโโ๏ธ" , "๐" , "๐โโ๏ธ" , "๐โโ๏ธ" , "๐คฆ" , "๐คฆโโ๏ธ" , "๐คฆโโ๏ธ" , "๐คท" , "๐คทโโ๏ธ" , "๐คทโโ๏ธ" , "๐งโโ๏ธ" , "๐จโโ๏ธ" , "๐ฉโโ๏ธ" , "๐งโ๐" , "๐จโ๐" , "๐ฉโ๐" , "๐งโ๐ซ" , "๐จโ๐ซ" , "๐ฉโ๐ซ" , "๐งโโ๏ธ" , "๐จโโ๏ธ" , "๐ฉโโ๏ธ" , "๐งโ๐พ" , "๐จโ๐พ" , "๐ฉโ๐พ" , "๐งโ๐ณ" , "๐จโ๐ณ" , "๐ฉโ๐ณ" , "๐งโ๐ง" , "๐จโ๐ง" , "๐ฉโ๐ง" , "๐งโ๐ญ" , "๐จโ๐ญ" , "๐ฉโ๐ญ" , "๐งโ๐ผ" , "๐จโ๐ผ" , "๐ฉโ๐ผ" , "๐งโ๐ฌ" , "๐จโ๐ฌ" , "๐ฉโ๐ฌ" , "๐งโ๐ป" , "๐จโ๐ป" , "๐ฉโ๐ป" , "๐งโ๐ค" , "๐จโ๐ค" , "๐ฉโ๐ค" , "๐งโ๐จ" , "๐จโ๐จ" , "๐ฉโ๐จ" , "๐งโโ๏ธ" , "๐จโโ๏ธ" , "๐ฉโโ๏ธ" , "๐งโ๐" , "๐จโ๐" , "๐ฉโ๐" , "๐งโ๐" , "๐จโ๐" , "๐ฉโ๐" , "๐ฎ" , "๐ฎโโ๏ธ" , "๐ฎโโ๏ธ" , "๐ต๏ธ" , "๐ต๏ธโโ๏ธ" , "๐ต๏ธโโ๏ธ" , "๐" , "๐โโ๏ธ" , "๐โโ๏ธ" , "๐ฅท" , "๐ท" , "๐ทโโ๏ธ" , "๐ทโโ๏ธ" , "๐คด" , "๐ธ" , "๐ณ" , "๐ณโโ๏ธ" , "๐ณโโ๏ธ" , "๐ฒ" , "๐ง" , "๐คต" , "๐คตโโ๏ธ" , "๐คตโโ๏ธ" , "๐ฐ" , "๐ฐโโ๏ธ" , "๐ฐโโ๏ธ" , "๐คฐ" , "๐คฑ" , "๐ฉโ๐ผ" , "๐จโ๐ผ" , "๐งโ๐ผ" , "๐ผ" , "๐" , "๐คถ" , "๐งโ๐" , "๐ฆธ" , "๐ฆธโโ๏ธ" , "๐ฆธโโ๏ธ" , "๐ฆน" , "๐ฆนโโ๏ธ" , "๐ฆนโโ๏ธ" , "๐ง" , "๐งโโ๏ธ" , "๐งโโ๏ธ" , "๐ง" , "๐งโโ๏ธ" , "๐งโโ๏ธ" , "๐ง" , "๐งโโ๏ธ" , "๐งโโ๏ธ" , "๐ง" , "๐งโโ๏ธ" , "๐งโโ๏ธ" , "๐ง" , "๐งโโ๏ธ" , "๐งโโ๏ธ" , "๐ง" , "๐งโโ๏ธ" , "๐งโโ๏ธ" , "๐ง" , "๐งโโ๏ธ" , "๐งโโ๏ธ" , "๐" , "๐โโ๏ธ" , "๐โโ๏ธ" , "๐" , "๐โโ๏ธ" , "๐โโ๏ธ" , "๐ถ" , "๐ถโโ๏ธ" , "๐ถโโ๏ธ" , "๐ง" , "๐งโโ๏ธ" , "๐งโโ๏ธ" , "๐ง" , "๐งโโ๏ธ" , "๐งโโ๏ธ" , "๐งโ๐ฆฏ" , "๐จโ๐ฆฏ" , "๐ฉโ๐ฆฏ" , "๐งโ๐ฆผ" , "๐จโ๐ฆผ" , "๐ฉโ๐ฆผ" , "๐งโ๐ฆฝ" , "๐จโ๐ฆฝ" , "๐ฉโ๐ฆฝ" , "๐" , "๐โโ๏ธ" , "๐โโ๏ธ" , "๐" , "๐บ" , "๐ด๏ธ" , "๐ฏ" , "๐ฏโโ๏ธ" , "๐ฏโโ๏ธ" , "๐ง" , "๐งโโ๏ธ" , "๐งโโ๏ธ" , "๐ง" , "๐งโ๐คโ๐ง" , "๐ญ" , "๐ซ" , "๐ฌ" , "๐" , "๐ฉโโค๏ธโ๐โ๐จ" , "๐จโโค๏ธโ๐โ๐จ" , "๐ฉโโค๏ธโ๐โ๐ฉ" , "๐" , "๐ฉโโค๏ธโ๐จ" , "๐จโโค๏ธโ๐จ" , "๐ฉโโค๏ธโ๐ฉ" , "๐ช" , "๐จโ๐ฉโ๐ฆ" , "๐จโ๐ฉโ๐ง" , "๐จโ๐ฉโ๐งโ๐ฆ" , "๐จโ๐ฉโ๐ฆโ๐ฆ" , "๐จโ๐ฉโ๐งโ๐ง" , "๐จโ๐จโ๐ฆ" , "๐จโ๐จโ๐ง" , "๐จโ๐จโ๐งโ๐ฆ" , "๐จโ๐จโ๐ฆโ๐ฆ" , "๐จโ๐จโ๐งโ๐ง" , "๐ฉโ๐ฉโ๐ฆ" , "๐ฉโ๐ฉโ๐ง" , "๐ฉโ๐ฉโ๐งโ๐ฆ" , "๐ฉโ๐ฉโ๐ฆโ๐ฆ" , "๐ฉโ๐ฉโ๐งโ๐ง" , "๐จโ๐ฆ" , "๐จโ๐ฆโ๐ฆ" , "๐จโ๐ง" , "๐จโ๐งโ๐ฆ" , "๐จโ๐งโ๐ง" , "๐ฉโ๐ฆ" , "๐ฉโ๐ฆโ๐ฆ" , "๐ฉโ๐ง" , "๐ฉโ๐งโ๐ฆ" , "๐ฉโ๐งโ๐ง" , "๐ฃ๏ธ" , "๐ค" , "๐ฅ" , "๐ซ" , "๐ฃ" , "๐งณ" , "๐" , "โ๏ธ" , "๐" , "๐งต" , "๐งถ" , "๐" , "๐ถ๏ธ" , "๐ฅฝ" , "๐ฅผ" , "๐ฆบ" , "๐" , "๐" , "๐" , "๐งฃ" , "๐งค" , "๐งฅ" , "๐งฆ" , "๐" , "๐" , "๐ฅป" , "๐ฉฑ" , "๐ฉฒ" , "๐ฉณ" , "๐" , "๐" , "๐" , "๐" , "๐" , "๐" , "๐ฉด" , "๐" , "๐" , "๐ฅพ" , "๐ฅฟ" , "๐ " , "๐ก" , "๐ฉฐ" , "๐ข" , "๐" , "๐" , "๐ฉ" , "๐" , "๐งข" , "๐ช" , "โ๏ธ" , "๐" , "๐" , "๐ผ" , "๐ฉธ" ];
const n = ["Grinning Face" , "Grinning Face with Big Eyes" , "Grinning Face with Smiling Eyes" , "Beaming Face with Smiling Eyes" , "Grinning Squinting Face" , "Grinning Face with Sweat" , "Rolling on the Floor Laughing" , "Face with Tears of Joy" , "Slightly Smiling Face" , "Upside-Down Face" , "Winking Face" , "Smiling Face with Smiling Eyes" , "Smiling Face with Halo" , "Smiling Face with Hearts" , "Smiling Face with Heart-Eyes" , "Star-Struck" , "Face Blowing a Kiss" , "Kissing Face" , " Smiling Face" , "Kissing Face with Closed Eyes" , "Kissing Face with Smiling Eyes" , "Smiling Face with Tear" , "Face Savoring Food" , "Face with Tongue" , "Winking Face with Tongue" , "Zany Face" , "Squinting Face with Tongue" , "Money-Mouth Face" , "Hugging Face" , "Face with Hand Over Mouth" , "Shushing Face" , "Thinking Face" , "Zipper-Mouth Face" , "Face with Raised Eyebrow" , "Neutral Face" , "Expressionless Face" , "Face Without Mouth" , "๏ธ Face in Clouds" , "Smirking Face" , "Unamused Face" , "Face with Rolling Eyes" , "Grimacing Face" , " Face Exhaling" , "Lying Face" , "Relieved Face" , "Pensive Face" , "Sleepy Face" , "Drooling Face" , "Sleeping Face" , "Face with Medical Mask" , "Face with Thermometer" , "Face with Head-Bandage" , "Nauseated Face" , "Face Vomiting" , "Sneezing Face" , "Hot Face" , "Cold Face" , "Woozy Face" , "Dizzy Face" , " Face with Spiral Eyes" , "Exploding Head" , "Cowboy Hat Face" , "Partying Face" , "Disguised Face" , "Smiling Face with Sunglasses" , "Nerd Face" , "Face with Monocle" , "Confused Face" , "Worried Face" , "Slightly Frowning Face" , " Frowning Face" , "Face with Open Mouth" , "Hushed Face" , "Astonished Face" , "Flushed Face" , "Pleading Face" , "Frowning Face with Open Mouth" , "Anguished Face" , "Fearful Face" , "Anxious Face with Sweat" , "Sad but Relieved Face" , "Crying Face" , "Loudly Crying Face" , "Face Screaming in Fear" , "Confounded Face" , "Persevering Face" , "Disappointed Face" , "Downcast Face with Sweat" , "Weary Face" , "Tired Face" , "Yawning Face" , "Face with Steam From Nose" , "Pouting Face" , "Angry Face" , "Face with Symbols on Mouth" , "Smiling Face with Horns" , "Angry Face with Horns" , "Skull" , " Skull and Crossbones" , "Pile of Poo" , "Clown Face" , "Ogre" , "Goblin" , "Ghost" , "Alien" , "Alien Monster" , "Robot" , "Grinning Cat" , "Grinning Cat with Smiling Eyes" , "Cat with Tears of Joy" , "Smiling Cat with Heart-Eyes" , "Cat with Wry Smile" , "Kissing Cat" , "Weary Cat" , "Crying Cat" , "Pouting Cat" , "Kiss Mark" , "Waving Hand" , "Raised Back of Hand" , " Hand with Fingers Splayed" , "Raised Hand" , "Vulcan Salute" , "OK Hand" , "Pinched Fingers" , "Pinching Hand" , " Victory Hand" , "Crossed Fingers" , "Love-You Gesture" , "Sign of the Horns" , "Call Me Hand" , "Backhand Index Pointing Left" , "Backhand Index Pointing Right" , "Backhand Index Pointing Up" , "Middle Finger" , "Backhand Index Pointing Down" , " Index Pointing Up" , "Thumbs Up" , "Thumbs Down" , "Raised Fist" , "Oncoming Fist" , "Left-Facing Fist" , "Right-Facing Fist" , "Clapping Hands" , "Raising Hands" , "Open Hands" , "Palms Up Together" , "Handshake" , "Folded Hands" , " Writing Hand" , "Nail Polish" , "Selfie" , "Flexed Biceps" , "Mechanical Arm" , "Mechanical Leg" , "Leg" , "Foot" , "Ear" , "Ear with Hearing Aid" , "Nose" , "Brain" , "Anatomical Heart" , "Lungs" , "Tooth" , "Bone" , "Eyes" , " Eye" , "Tongue" , "Mouth" , "Baby" , "Child" , "Boy" , "Girl" , "Person" , "Person: Blond Hair" , "Man" , "Person: Beard" , " Man: Red Hair" , " Man: Curly Hair" , " Man: White Hair" , " Man: Bald" , "Woman" , " Woman: Red Hair" , " Person: Red Hair" , " Woman: Curly Hair" , " Person: Curly Hair" , " Woman: White Hair" , " Person: White Hair" , " Woman: Bald" , " Person: Bald" , "๏ธ Woman: Blond Hair" , "๏ธ Man: Blond Hair" , "Older Person" , "Old Man" , "Old Woman" , "Person Frowning" , "๏ธ Man Frowning" , "๏ธ Woman Frowning" , "Person Pouting" , "๏ธ Man Pouting" , "๏ธ Woman Pouting" , "Person Gesturing No" , "๏ธ Man Gesturing No" , "๏ธ Woman Gesturing No" , "Person Gesturing OK" , "๏ธ Man Gesturing OK" , "๏ธ Woman Gesturing OK" , "Person Tipping Hand" , "๏ธ Man Tipping Hand" , "๏ธ Woman Tipping Hand" , "Person Raising Hand" , "๏ธ Man Raising Hand" , "๏ธ Woman Raising Hand" , "Deaf Person" , "๏ธ Deaf Man" , "๏ธ Deaf Woman" , "Person Bowing" , "๏ธ Man Bowing" , "๏ธ Woman Bowing" , "Person Facepalming" , "๏ธ Man Facepalming" , "๏ธ Woman Facepalming" , "Person Shrugging" , "๏ธ Man Shrugging" , "๏ธ Woman Shrugging" , "๏ธ Health Worker" , "๏ธ Man Health Worker" , "๏ธ Woman Health Worker" , " Student" , " Man Student" , " Woman Student" , " Teacher" , " Man Teacher" , " Woman Teacher" , "๏ธ Judge" , "๏ธ Man Judge" , "๏ธ Woman Judge" , " Farmer" , " Man Farmer" , " Woman Farmer" , " Cook" , " Man Cook" , " Woman Cook" , " Mechanic" , " Man Mechanic" , " Woman Mechanic" , " Factory Worker" , " Man Factory Worker" , " Woman Factory Worker" , " Office Worker" , " Man Office Worker" , " Woman Office Worker" , " Scientist" , " Man Scientist" , " Woman Scientist" , " Technologist" , " Man Technologist" , " Woman Technologist" , " Singer" , " Man Singer" , " Woman Singer" , " Artist" , " Man Artist" , " Woman Artist" , "๏ธ Pilot" , "๏ธ Man Pilot" , "๏ธ Woman Pilot" , " Astronaut" , " Man Astronaut" , " Woman Astronaut" , " Firefighter" , " Man Firefighter" , " Woman Firefighter" , "Police Officer" , "๏ธ Man Police Officer" , "๏ธ Woman Police Officer" , " Detective" , "Man Detective" , "Woman Detective" , "Guard" , "๏ธ Man Guard" , "๏ธ Woman Guard" , "Ninja" , "Construction Worker" , "๏ธ Man Construction Worker" , "๏ธ Woman Construction Worker" , "Prince" , "Princess" , "Person Wearing Turban" , "๏ธ Man Wearing Turban" , "๏ธ Woman Wearing Turban" , "Person With Skullcap" , "Woman with Headscarf" , "Person in Tuxedo" , "๏ธ Man in Tuxedo" , "๏ธ Woman in Tuxedo" , "Person With Veil" , "๏ธ Man with Veil" , "๏ธ Woman with Veil" , "Pregnant Woman" , "Breast-Feeding" , " Woman Feeding Baby" , " Man Feeding Baby" , " Person Feeding Baby" , "Baby Angel" , "Santa Claus" , "Mrs. Claus" , " Mx Claus" , "Superhero" , "๏ธ Man Superhero" , "๏ธ Woman Superhero" , "Supervillain" , "๏ธ Man Supervillain" , "๏ธ Woman Supervillain" , "Mage" , "๏ธ Man Mage" , "๏ธ Woman Mage" , "Fairy" , "๏ธ Man Fairy" , "๏ธ Woman Fairy" , "Vampire" , "๏ธ Man Vampire" , "๏ธ Woman Vampire" , "Merperson" , "๏ธ Merman" , "๏ธ Mermaid" , "Elf" , "๏ธ Man Elf" , "๏ธ Woman Elf" , "Genie" , "๏ธ Man Genie" , "๏ธ Woman Genie" , "Zombie" , "๏ธ Man Zombie" , "๏ธ Woman Zombie" , "Person Getting Massage" , "๏ธ Man Getting Massage" , "๏ธ Woman Getting Massage" , "Person Getting Haircut" , "๏ธ Man Getting Haircut" , "๏ธ Woman Getting Haircut" , "Person Walking" , "๏ธ Man Walking" , "๏ธ Woman Walking" , "Person Standing" , "๏ธ Man Standing" , "๏ธ Woman Standing" , "Person Kneeling" , "๏ธ Man Kneeling" , "๏ธ Woman Kneeling" , " Person with White Cane" , " Man with White Cane" , " Woman with White Cane" , " Person in Motorized Wheelchair" , " Man in Motorized Wheelchair" , " Woman in Motorized Wheelchair" , " Person in Manual Wheelchair" , " Man in Manual Wheelchair" , " Woman in Manual Wheelchair" , "Person Running" , "๏ธ Man Running" , "๏ธ Woman Running" , "Woman Dancing" , "Man Dancing" , " Person in Suit Levitating" , "People with Bunny Ears" , "๏ธ Men with Bunny Ears" , "๏ธ Women with Bunny Ears" , "Person in Steamy Room" , "๏ธ Man in Steamy Room" , "๏ธ Woman in Steamy Room" , "Person in Lotus Position" , "โPeople Holding Hands" , "Women Holding Hands" , "Woman and Man Holding Hands" , "Men Holding Hands" , "Kiss" , "Kiss: Woman, Man" , "Kiss: Man, Man" , "๏ธโKiss: Woman, Woman" , "Couple with Heart" , "๏ธโCouple with Heart: Woman, Man" , "๏ธโCouple with Heart: Man, Man" , "๏ธโCouple with Heart: Woman, Woman" , "Family" , "โFamily: Man, Woman, Boy" , "โFamily: Man, Woman, Girl" , "โFamily: Man, Woman, Girl, Boy" , "โFamily: Man, Woman, Boy, Boy" , "โFamily: Man, Woman, Girl, Girl" , "โFamily: Man, Man, Boy" , "โFamily: Man, Man, Girl" , "โFamily: Man, Man, Girl, Boy" , "โFamily: Man, Man, Boy, Boy" , "โFamily: Man, Man, Girl, Girl" , "โFamily: Woman, Woman, Boy" , "โFamily: Woman, Woman, Girl" , "โFamily: Woman, Woman, Girl, Boy" , "โFamily: Woman, Woman, Boy, Boy" , "โFamily: Woman, Woman, Girl, Girl" , " Family: Man, Boy" , "โFamily: Man, Boy, Boy" , "Family: Man, Girl" , "โFamily: Man, Girl, Boy" , "โFamily: Man, Girl, Girl" , " Family: Woman, Boy" , "โFamily: Woman, Boy, Boy" , " Family: Woman, Girl" , "โFamily: Woman, Girl, Boy" , "โFamily: Woman, Girl, Girl" , " Speaking Head" , "Bust in Silhouette" , "Busts in Silhouette" , "People Hugging" , "Footprints" , "Luggage" , "Closed Umbrella" , " Umbrella" , "Jack-O-Lantern" , "Thread" , "Yarn" , "Glasses" , " Sunglasses" , "Goggles" , "Lab Coat" , "Safety Vest" , "Necktie" , "T-Shirt" , "Jeans" , "Scarf" , "Gloves" , "Coat" , "Socks" , "Dress" , "Kimono" , "Sari" , "One-Piece Swimsuit" , "Briefs" , "Shorts" , "Bikini" , "Womanโs Clothes" , "Purse" , "Handbag" , "Clutch Bag" , "Backpack" , "Thong Sandal" , "Manโs Shoe" , "Running Shoe" , "Hiking Boot" , "Flat Shoe" , "High-Heeled Shoe" , "Womanโs Sandal" , "Ballet Shoes" , "Womanโs Boot" , "Crown" , "Womanโs Hat" , "Top Hat" , "Graduation Cap" , "Billed Cap" , "Military Helmet" , " Rescue Workerโs Helmet" , "Lipstick" , "Ring" , "Briefcase" , "Drop of Blood"];
//console.log(e.length);
//console.log(n.length);

/*-------------- Audio Files --------------- */
const success = new Audio('https://github.com/healer-op/n0des/blob/main/payapi/success.mp3?raw=true');
const error = new Audio('https://github.com/healer-op/n0des/blob/main/payapi/error.mp3?raw=true');

/*------- Logical Part---------------------------*/

var i = Math.floor(Math.random() * e.length);
//console.log(e[i]+" "+n[i]); 

document.getElementById("eq").innerHTML = "Find ("+n[i]+") Out of These"; 

var j = Math.floor(Math.random() * 4) + 1;
//console.log(j);

document.getElementById(j).innerHTML = e[i];

/*--------------Checking That Good Button Should Not Reapeat---------------*/

var x;

for(k=1;k<=4;k++){
    if(k!=j){
        var x1=1;
        while(x1){
            x = Math.floor(Math.random() * e.length);
            if(x!=i){
                document.getElementById(k).innerHTML = e[x];
                x1=0;
            }
        }
    }
}

/*--------------Non Reapting Error Button---------------*/

for(i1=1;i1<=4;i1++){
    for(j1=i1+1;j1<=4;j1++){
        if(document.getElementById(i1).innerHTML == document.getElementById(j1).innerHTML){

            var x1=1;
            while(x1){
                x = Math.floor(Math.random() * e.length);
                if(x!=i && e[i1]!=e[j1]){
                    document.getElementById(j1).innerHTML = e[x];
                    x1=0;
                }
            }
        }
    }
}

/*--------------Checking---------------*/

var li = document.getElementById('elink');
var count = 0;
const onClick = (event) => {
    if (event.target.nodeName === 'BUTTON') {
      if(event.target.id == j){
          //console.log("Correct");
          success.play();
          document.write("<div id ='eCaptcha' style='text-align: center;justify-content: center;display: flex;justify-content: center;align-items: center;height: 100%;width: 100%;font-family: 'Poppins', sans-serif;'><div><img src ='https://image.flaticon.com/icons/png/128/190/190411.png' width='20%'><h1>You Have Been Verified</h1><p>You Will Be Redirected in a While.</p></div></div>");
          setTimeout(function(){ window.open(li.className,"_self"); }, 3000);
      }
      if(event.target.id != j){
          //console.log("Error");
          error.play();
          count++;
      }
      if(count >1){
        error.play();
        document.write("<div id ='eCaptcha' style='text-align: center;justify-content: center;display: flex;justify-content: center;align-items: center;height: 100%;width: 100%;font-family: 'Poppins', sans-serif;'><div><img src ='https://image.flaticon.com/icons/png/128/594/594864.png' width='10%'><h1>Sorry We Cannot Verify You!</h1><p>You Have Choosed Worng Anwser More Than One Time</p></div></div>");
      }
    }
  }
  window.addEventListener('click', onClick);

  /*-----------CopyRight--------------*/

  document.getElementById("elink").innerHTML = "ยฉ๏ธCoyrights 2021 eCaptha";


