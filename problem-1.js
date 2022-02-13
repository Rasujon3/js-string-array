/* 
    ১) একটা অ্যারেতে তোমার পছন্দের খাবার গুলো রাখো এবং যে সব খাবারের 
    নামের মধ্যে m আছে সেসব খাবারের নামগুলো console log করো। 
*/

const friendsName = [
    'Gorur mangso',
    'Biriyani',
    'Kacchi',
    'Boro mach',
    'Misty',
    'Badam',
    'Dim'
];

const hasInclude = 'm'
const hasIncludedM = [];

for (const favFood of friendsName) {
    if (favFood.toLowerCase().includes(hasInclude)==true) {
        hasIncludedM.push(favFood);

    }
}
console.log(hasIncludedM);
