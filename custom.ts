
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */


//// jwc 25-0805-1750 o //% weight=100 color=#0fbc11 icon=""
//// jwc 25-0805-1750 o namespace custom {
//// jwc 25-0805-1750 o     /**
//// jwc 25-0805-1750 o      * TODO: describe your function here
//// jwc 25-0805-1750 o      * @param n describe parameter here, eg: 5
//// jwc 25-0805-1750 o      * @param s describe parameter here, eg: "Hello"
//// jwc 25-0805-1750 o      * @param e describe parameter here
//// jwc 25-0805-1750 o      */
//// jwc 25-0805-1750 o     //% block
//// jwc 25-0805-1750 o     export function foo(n: number, s: string, e: MyEnum): void {
//// jwc 25-0805-1750 o         // Add code here
//// jwc 25-0805-1750 o     }
//// jwc 25-0805-1750 o 
//// jwc 25-0805-1750 o     /**
//// jwc 25-0805-1750 o      * TODO: describe your function here
//// jwc 25-0805-1750 o      * @param value describe value here, eg: 5
//// jwc 25-0805-1750 o      */
//// jwc 25-0805-1750 o     //% block
//// jwc 25-0805-1750 o     export function fib(value: number): number {
//// jwc 25-0805-1750 o         return value <= 1 ? value : fib(value -1) + fib(value - 2);
//// jwc 25-0805-1750 o     }
//// jwc 25-0805-1750 o }


/**
 * quest_Note_1 blocks
 */
//% weight=56 color=#C0C0C0 icon="Q"
namespace quest_Note_1 {
    /**
     * quest_Show_String_For_Note_Small_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block="note\\_small: $textStrIn"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Small_Func(textStrIn: string) {
    }
    // * Add space in front of '|' such as ' |' creates reliable 1row spacing
    /**
     * quest_Show_String_For_Note_Big_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block=" |note\\_big: $textStrIn |"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Big_Func(textStrIn: string) {
    }
}

/**
 * quest_Note_2 blocks
 */
//% weight=55 color=#00FF00 icon="Q"
namespace quest_Note_2 {
    /**
     * quest_Show_String_For_Note_Small_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block="note\\_small: $textStrIn"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Small_Func(textStrIn: string) {
    }
    // * Add space in front of '|' such as ' |' creates reliable 1row spacing
    /**
     * quest_Show_String_For_Note_Big_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block=" |note\\_big: $textStrIn |"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Big_Func(textStrIn: string) {
    }
}

/**
 * quest_Note_3 blocks
 */
////jwc y //% weight=53 color=#00FFFF icon="Q"
////jwc ? confused with blue 'call function' //% weight=54 color=#0000FF icon="Q"
//% weight=54 color=#000080 icon="Q"
namespace quest_Note_3 {
    /**
     * quest_Show_String_For_Note_Small_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block="note\\_small: $textStrIn"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Small_Func(textStrIn: string) {
    }
    // * Add space in front of '|' such as ' |' creates reliable 1row spacing
    /**
     * quest_Show_String_For_Note_Big_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block=" |note\\_big: $textStrIn |"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Big_Func(textStrIn: string) {
    }
}

//////jwc y //% weight=56 color=#FFFF00 icon="Q"
//////jwc y //% weight=56 color=#7F7F00 icon="Q"
//////jwc y //% weight=52 color=#ffff00 icon="Q"

/**
 * quest_Note_4 blocks
 */
//% weight=53 color=#ff7f00 icon="Q"
namespace quest_Note_4 {
    /**
     * quest_Show_String_For_Note_Small_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block="note\\_small: $textStrIn"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Small_Func(textStrIn: string) {
    }
    // * Add space in front of '|' such as ' |' creates reliable 1row spacing
    /**
     * quest_Show_String_For_Note_Big_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block=" |note\\_big: $textStrIn |"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Big_Func(textStrIn: string) {
    }
}

//////jwc y //% weight=55 color=#FF0000 icon="Q"
/**
 * quest_Note_5 blocks
 */
///jwc n below Quest_Note_1 //% weight=55 color=#ff7f00 icon="Q"
///jwc y //% weight=51 color=#ff7f00 icon="Q"
///jwc y //% weight=51 below Note_4 color=#ff7f00 icon="Q"
///jwc //% weight=50 color=#ff7f00 icon="Q"
///jwc //% weight=50 color=#ff7f00 icon="Q"
///jwc //% weight=49 color=#ff7f00 icon="Q"
///jwc //% weight=51 color=#ff7f00 icon="Q"
///jwc n same //% weight=45 color=#ff7f00 icon="Q"
///jwc n below 'wuKong' //% weight=40 color=#ff7f00 icon="Q"
///jwc below oled //% weight=20 c'olor=#ff7f00 icon="Q"
///jwc //% weight=50.5 color=#ff7f00 icon="Q"
// jwc 21,22,30,40,45,50, 50.5: below 'wuKong'
// jwc 51 below 'Quest_Note_4'
//% weight=52 color=#FF00FF icon="Q"
namespace quest_Note_5 {
    /**
     * quest_Show_String_For_Note_Small_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block="note\\_small: $textStrIn"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Small_Func(textStrIn: string) {
    }
    // * Add space in front of '|' such as ' |' creates reliable 1row spacing
    /**
     * quest_Show_String_For_Note_Big_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block=" |note\\_big: $textStrIn |"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Big_Func(textStrIn: string) {
    }
}

//% weight=51 color=#000000 icon="Q"
namespace quest_Note_6 {
    /**
     * quest_Show_String_For_Note_Small_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block="note\\_small: $textStrIn"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Small_Func(textStrIn: string) {
    }
    // * Add space in front of '|' such as ' |' creates reliable 1row spacing
    /**
     * quest_Show_String_For_Note_Big_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block=" |note\\_big: $textStrIn |"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Big_Func(textStrIn: string) {
    }
}


