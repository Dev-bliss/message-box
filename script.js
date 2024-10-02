const cont = document.querySelector('.box');
const numberDisplay = document.querySelector('#number');
const deleteBtn = document.querySelector('#deleteBtn');

let arr = [
    '1 The helicopter soared above the ocean, where a whale breached the surface near a submarine. Meanwhile, a kitten played with bubblegum on the beach, while a peacock spread its vibrant feathers. Nearby, children rode bicycles and skateboards, laughing and having fun. A musician strummed a guitar, accompanied by a harmonica and accordion. As the sun set, fireworks exploded in the sky, reflecting off the glittering water. In the distance, a space station orbited the Earth, vjdsjdjsjdksjksksdskxksxmksmmisible through a microscope. A beautiful butterfly fluttered by, attracted to perfume and honeycomb. Life was full of wonder....',

    '2 The sun was shining brightly in the clear blue sky as the helicopter soared above the ocean, where a whale breached the surface near a submarine, causing a kitten to playfully chase colorful bubblegum on the beach, while children rode bicycles and skateboards with skill and laughter, accompanied by a musician strumming a guitar with passion and harmony, joined by an accohsdsjdjsdskdkssjbsdsdsrdion and harmonica playing beautifully today...',

    '3 As fireworks exploded in the evening sky, glitter reflected off the calm water, where a space station orbited the Earth silently, and a butterfly fluttered towards sweet perfume, attracted to honeycomb filled with busy honeybees collecting nectar from vibrant flowuiddwod,,oollshgaers, spread widely by a peacock...',
    
    '4 Meanwhile, people enjoyed the warm weather, feeling joyful and carefree, as ocean waves crashed on the shore, and the sun set behind distant hills, casting a golden glow over the landscape, filling the air with music and laughter, bringing people togdhdjsdhsjdksdksdkdsmmmzzether in celebration...',

    '5 Life was full of wonder and behsjdsdnskdskdksdksauty, surrounded by every moment, filled with love and connection, where every day brought new opportunities and experiences, shaping our lives and memories, creating a tapestry of joy and happiness...',

    '6 The world was a vibrant tapestry, woven with diverse cultures and traditions, where every thread told a story, and every moment was precious, filled with laughter and tears, hopes and dreamsyuegejhdsjdjs djdhs...',
    
    '7 In this world of wonder, we found solace and peace, where love and kindness filled every corner, bringing us closer togetheryeyedudud ehedij diweuweowioiee ...',
    
    '8 For life was a journey, not a destination, and every moment was a reminder to live, to love, and to cherish hdsdjdksdsklsdkld jwomwgyyiweiwwb uieweiweww...',

    '9 The helicopter soared above the ocean, where a whale breached the surface near a submarine. Meanwhile, a kitten played with bubblegum on the beach, while a peacock spread its vibrant feathers. Nearby, children rode bicycles and skateboards, laughing and having fun. A musician strummed a guitar, accompanied by a harmonica and accordion. As the sun set, fireworks exploded in the sky, reflecting off the glittering water. In the distance, a space station orbited the Earth, visibleyusqsuiidd through a microscope. A beautiful butterfly fluttered by, attracted to perfume and honeycomb. Life was full of wonder....',

    '19 The sun was shining brightly in the clear blue sky as the helicopter soared above the ocean, where a whale breached the surface near a submarine, causing a kitten to playfully chase colorful bubblegum on the beach, while children rode bicycles and skateboards with skill and laughter, accompanied by a musician strumming a guitar with passion and harmony, joined by an accoghuwsiiwooordion and harmonica playing beautifully today...',

    '11 As fireworks exploded in the evening sky, glitter reflected off the calm water, where a space station orbited the Earth silently, and a butterfly fluywqiqiwqwkwttered towards sweet perfume, attracted to honeycomb filled with busy honeybees collecting nectar from vibrant flowers, spread widely by a peacock...',
    
    '12 Meanwhile, people enjoyed the warm weather, feeling joyful and carefree, as ocean waves crashed on the shore, and the sun set behind distant hills, casthshsh hhuuswtwwing a golden glow over the landscape, filling the air with music and laughter, bringing people together in celebration...',

    '13 Life was full of wonder and beauty, surrounded by every moment, filled with love and connection, where every day brought new opportunities and experiences, shaping our lihs shs isisiiw ves and memories, creating a tapestry of joy and happiness...',

    '14 The world was a vibrant tapestry, woven with diverse cultures and traditions, where every thread told a story, and every moment was precious, filled with laughter and tehhsds hhs shh arus, hopes and dreams...',
    
    '15 In this world of wonder, we found solace and peace, where love and kindnesxxs filled every corner, bringing us closer together hddejhe hsjjj ssjjds dsjd uhduhu ...',
    
    '16 For life was a journey, not a destination, and every moment was a remindpper to live, to love, and to cherish...',
    '17 As fireworks exploded in the evening sky, glitter reflected off the cannlm water, where a space station orbited the Earth silently, and a butterfly fluttered towards sweet perfume, attracted to honeycomb filled with busy honeybees collecting nectar from vibrant flowers, spread widely by a peacock...',
    
    '18 Meanwhile, people enjoyed the warm weather, feeling joyful and carettfree, as ocean waves crashed on the shore, and the sun set behind distant hills, casting a golden glow over the landscape, filling the air with music and laughter, bringing people together in celebration...',
    
    '19 Life was full of wonder and beauuuty, surrounded by every moment, filled with love and connection, where every day brought new opportunities and experiences, shaping our lives and memories, creating a tapestry of joy and happiness...',

    '20 The world was a vibrant tapeggstry, woven with diverse cultures and traditions, where every thread told a story, and every moment was precious, filled with laughter and tears, hopes and dreams...',
    

    
];


