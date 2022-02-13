/* 
    ২) একটা অ্যারেতে তোমার বন্ধু বা বান্ধুবির পুরা নাম রাখো এবং 
    যাদের নাম md দিয়ে শুরু হয় সেই নামগুলো প্রথমে console log করবে।
    তারপর পুরা জিনিসটা একটা ফাংশনে রাখো। এবং তোমার কাজ হবে। 
    যার যার নাম md দিয়ে শুরু হয়। সেই নামগুলো রিটার্ন করবে। 
*/

const friendsName = [
    'Gorur mangso',
    'Biriyani',
    'Kacchi',
    'Boro mach',
    'Misty',
    'Badam',
    'Dim',
    'md jalal',
    'pappu md',
    'md pappu'
];

function checkStartWithMd(friendsNameInArray) {
    const hasStartWith = 'md'
    const hasStartWithMd = [];
    for (const friendName of friendsNameInArray) {
        if (friendName.toLowerCase().startsWith(hasStartWith)==true) {
            hasStartWithMd.push(friendName);
        }
    }
    return hasStartWithMd;
}

const result = checkStartWithMd(friendsName);
console.log(result);