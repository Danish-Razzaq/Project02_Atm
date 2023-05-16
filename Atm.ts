#! /usr/bin/env node

import inquirer from "inquirer";
import figlet from "figlet";
import chalkanimation from "chalk-animation"
import chalk from "chalk"
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";
import { atminterface, sleep } from "./logics.js";



const Bank = chalk.bold(chalk.red("❍︎"), (chalk.cyan("Alfalah Bank")));
console.log(Bank);

const myAtm = async () => {
    class Bank {
        clients: string[] = ["Danish", "Emaan", "Aslam"];
        pin_codes: string[] = ["daniali", "eman1212", "aslam111"];
    }

    let atm = new Bank;

    const login = await inquirer.prompt([{
        type: "input",
        name: "info",
        message: chalk.italic(chalk.green(`IF you alredy have accout then press L (login) otherwise press S (sig in) `, chalk.whiteBright(": ( L / S)")))

    }])
    const { info } = login;

    if (info === 'L' || info === 'l' || info === 'Login' || info === 'login' || info === 'y' || info === "Y") {
        const confim = await inquirer.prompt([{
            type: "input",
            name: "Username",
            message: "Enter the user name:"
        }, {
            name: "password",
            type: "input",
            message: "Enter you Pin Code:"
        }])
        const { Username, password } = confim;
        if (confim.Username === atm.clients[atm.clients.lastIndexOf(Username)] && confim.password === atm.pin_codes[atm.pin_codes.lastIndexOf(password)]) {

            let wellcome = chalk.red(`HI ${Username}`);
            console.log(wellcome);

            let Operation = await inquirer.prompt([{
                name: "displayATM",
                type: "list",
                message: "Select the option which you want to perform:",
                choices: ["Cash Withdrawal", "Transfer", "Change card Sitting", 'Balance check', "Bill Payment"]
            }])

            const { displayATM } = Operation;

            if (displayATM === 'Transfer') {

                const Cash_Withdrawal = await inquirer.prompt({
                    type: "list",
                    name: "cash",
                    choices: ["Jazz Cash", "Paypal", "Easypaisa", "Bank Acount"],
                    message: "Now select the Cash Withdrawal method: "
                })

                const cash = Cash_Withdrawal;
                if (Cash_Withdrawal.cash === 'Jazz Cash' || Cash_Withdrawal.cash === "Paypal" || Cash_Withdrawal.cash === "Easypaisa" || Cash_Withdrawal.cash === "Bank Acount") {
                    const TsferCash = await inquirer.prompt([{
                        type: "input",
                        name: "acount",
                        message: "Enter the Account Number: "
                    },
                    {
                        type: "input",
                        name: "Money",
                        message: "Enter the Amount: "
                    },
                    {
                        type: "input",
                        name: "pincode",
                        message: "Enter you pin code: "
                    }]);
                    const { Money, accout, pincode } = TsferCash
                    if (pincode === atm.pin_codes[atm.pin_codes.lastIndexOf(password)]) {
                        console.log("Transaction Successful")
                    }
                    else {
                        console.log(`\t"Transection Failed" '\n' Plz Enter Correct Password`);
                    }
                }
            }
            else if (displayATM === "Cash Withdrawal") {
                const getmoney = await inquirer.prompt([{
                    type: "input",
                    name: "money",
                    message: "Enter The Amount:",
                }, {
                    type: "input",
                    name: "pincode",
                    message: "Enter your pin Code:",
                }
                ])
                const { money, pincode } = getmoney;    //Distracturing

                if (pincode === atm.pin_codes[atm.pin_codes.lastIndexOf(password)]) {
                    console.log(" Withdrawal Successful")
                }
                else {
                    console.log(`   "SORRY" '\n' Plz Enter Correct Pin code`);
                }

            }
            else if (displayATM === "Change card Sitting") {
                console.log("PLZ contect Bank Manager to change Sitting");

            }
            else if (displayATM === 'Balance check') {
                console.log((10800 + Math.random() + Math.random()));

            }
            else if (displayATM === "Bill Payment") {
                const a = await inquirer.prompt([{
                    type: "list",
                    name: "Bill",
                    message: "Select Bill payment Mathod: ",
                    choices: ["Utility Bill", "Electricity Bill", "Gass Bill", "University Fee"]
                }])
                if (a.Bill === 'Utility Bill' || a.Bill === 'Electricity Bill' || a.Bill === "Gass Bill" || a.Bill === "University Fee") {
                    const paybill = await inquirer.prompt([
                        {
                            type: "input",
                            name: "billmoney",
                            message: "Enter The OTP COde of Bill/custum ID:",
                        }, {
                            type: "input",
                            name: "pincode",
                            message: "Enter your pin Code:",
                        }]);
                    const { billmoney, pincode } = paybill

                    if (pincode === atm.pin_codes[atm.pin_codes.lastIndexOf(password)]) {
                        console.log(" Paid Successful")
                    }
                    else {
                        console.log(`\t"SORRY" '\n' Plz Enter Correct Pin code`);
                    }
                }
            }
        } else {
            console.log("Plz enter correct password ");
        }
    }
    else if (
        info === 'S' || info === 's' || info === "sig in" || info === "Sig in"
    ) {
        await atminterface()   //Use  atminterce  which we impport from interface.ts file
    }
    else {
        let sysError = chalkanimation.pulse(chalk.bold(`\t\t" SYSTEM ERROR " `));
        await sleep();
        sysError.stop()
        let errorsolution = chalk.red('Please, restart the process by following the correct rule. ')
        console.log(errorsolution);
    }

}

await myAtm()


