let ru = ['а', 'А', 'б', 'Б', 'в', 'В', 'г', 'Г', 'д', 'Д', 'е', 'Е', 'ё', 'Ё', 'ж', 'Ж', 'з', 'З', 'и', 'И', 'й', 'Й',
    'к', 'К', 'л', 'Л', 'м', 'М', 'н', 'Н', 'о', 'О', 'п', 'П', 'р', 'Р', 'с', 'С', 'т', 'Т', 'у', 'У', 'ф', 'Ф', 'х',
    'Х', 'ц', 'Ц', 'ч', 'Ч', 'ш', 'Ш', 'щ', 'Щ', 'ъ', 'Ъ', 'ы', 'Ы', 'ь', 'Ь', 'э', 'Э', 'ю', 'Ю', 'я', 'Я', '«', '»',
    '–', '—', '№', '`'
];

let en = ['a', 'A', 'b', 'B', 'v', 'V', 'g', 'G', 'd', 'D', 'e', 'E', 'yo', 'Yo', 'zh', 'Zh', 'z', 'Z', 'i', 'I', 'y',
    'Y', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'f', 'F',
    'h', 'H', 'ts', 'Ts', 'ch', 'Ch', 'sh', 'Sh', 'sch', 'Sch', '', '', 'i', 'I', '', '', 'e', 'E', 'u', 'U', 'ya',
    'Ya', '"', '"', '-', '-', '#', '`'
];

let sortableEn = [...en].sort(function (a, b) {
    return b.length - a.length
});

let translate = (value) => {

    let translateString = value;

    if (value.length > 0) {

        let firstSymbol = value.slice(0, 1);

        if (ru.indexOf(firstSymbol) > -1) {

            ru.map((symbol) => {

                let enIndex = ru.indexOf(symbol);
                let enSymbol = en[enIndex];

                let regExp = new RegExp(symbol, 'g');

                translateString = translateString.replace(regExp, enSymbol)
            });
        } else if (en.indexOf(firstSymbol) > -1) {

            sortableEn.map((symbol) => {

                let enIndex = en.indexOf(symbol);
                let ruSymbol = ru[enIndex];

                if (en[enIndex].length !== 0) {

                    let regExp = new RegExp(symbol, 'g');

                    translateString = translateString.replace(regExp, ruSymbol)
                }
            })
        }
    }

    return translateString;
};

export default translate;


