import { getCookie } from 'cookies-next';

export const useDocereeLogin = (userObj: any,callbackFn:()=>void): string => {
    const win = globalThis?.window as any
    if (typeof win.setDocereeContext === 'function') {
        win.setDocereeContext(userObj);
        callbackFn();
        return 'true'
    }
    return 'error while setting the context. please check if render-header was initilaized correctly.'
}

export const useCheckDocereeHCPContextCookie = (): boolean => {
    const cookieStore = getCookie('_docereeContext');
    if(cookieStore){
        return true
    }
    return false
}

export const useDocereeLogout = (callbackFn:()=>void) => {
    document.cookie = '_docereeContext=; Max-Age=-99999999;';
    callbackFn();
}


export const useDocereeStartSession = (callbackFn?:()=>void) => {
    const win = globalThis?.window as any
    if (typeof win.startDocereeSession === 'function') {
        win.startDocereeSession(callbackFn);
        return [true,null]
    }
    return [false, 'Advance integration is only supported in US']
}

export const useDocereeendDocereeSession = (callbackFn?:()=>void) => {
    const win = globalThis?.window as any
    if (typeof win.endDocereeSession === 'function') {
        win.endDocereeSession(callbackFn);
        return [true,null]
    }
    return [false, 'Advance integration is only supported in US']
}

export const useDocereeSetDocereeAttributeAge = (age:string,callbackFn?:()=>void) => {
    const win = globalThis?.window as any
    if (typeof win.setDocereeAttributeAge === 'function') {
        win.setDocereeAttributeAge(age, callbackFn);
        return [true,null]
    }
    return [false, 'Advance integration is only supported in US']
}

export const useDocereeSetDocereeAttributeGender = (gender:string,callbackFn?:()=>void) => {
    const win = globalThis?.window as any
    if (typeof win.setDocereeAttributeGender === 'function') {
        win.setDocereeAttributeGender(gender, callbackFn);
        return [true,null]
    }
    return [false, 'Advance integration is only supported in US']
}

export const useDocereeSetDocereeAttributeLabTest = (labTests:string[],callbackFn?:()=>void) => {
    const win = globalThis?.window as any
    if (typeof win.setDocereeAttributeLabTest === 'function') {
        win.setDocereeAttributeLabTest(labTests, callbackFn);
        return [true,null]
    }
    return [false, 'Advance integration is only supported in US']
}

export const useDocereeSetDocereeAttributeLabTestHistory = (labTestsHistory:{date: string, value: string[]}[],callbackFn?:()=>void) => {
    const win = globalThis?.window as any
    if (typeof win.setDocereeAttributeLabTestHistory === 'function') {
        win.setDocereeAttributeLabTestHistory(labTestsHistory, callbackFn);
        return [true,null]
    }
    return [false, 'Advance integration is only supported in US']
}

export const useDocereeSetDocereeAttributeInsurance = (insurances:string[],callbackFn?:()=>void) => {
    const win = globalThis?.window as any
    if (typeof win.setDocereeAttributeInsurance === 'function') {
        win.setDocereeAttributeInsurance(insurances, callbackFn);
        return [true,null]
    }
    return [false, 'Advance integration is only supported in US']
}

export const useDocereeSetDocereeAttributeDiagnosis = (diagnosis:string[],callbackFn?:()=>void) => {
    const win = globalThis?.window as any
    if (typeof win.setDocereeAttributeDiagnosis === 'function') {
        win.setDocereeAttributeDiagnosis(diagnosis, callbackFn);
        return [true,null]
    }
    return [false, 'Advance integration is only supported in US']
}

export const useDocereeSetDocereeAttributeDiagnosisHistory = (diagnosisHistory:{date: string, value: string[]}[],callbackFn?:()=>void) => {
    const win = globalThis?.window as any
    if (typeof win.setDocereeAttributeDiagnosisHistory === 'function') {
        win.setDocereeAttributeDiagnosisHistory(diagnosisHistory, callbackFn);
        return [true,null]
    }
    return [false, 'Advance integration is only supported in US']
}

export const useDocereeSetDocereeAttributePrescription = (prescription:string[],callbackFn?:()=>void) => {
    const win = globalThis?.window as any
    if (typeof win.setDocereeAttributePrescription === 'function') {
        win.setDocereeAttributePrescription(prescription, callbackFn);
        return [true,null]
    }
    return [false, 'Advance integration is only supported in US']
}

export const useDocereeSetDocereeAttributePrescriptionHistory = (prescriptionHistory:{date: string, value: string[]}[],callbackFn?:()=>void) => {
    const win = globalThis?.window as any
    if (typeof win.setDocereeAttributePrescriptionHistory === 'function') {
        win.setDocereeAttributePrescriptionHistory(prescriptionHistory, callbackFn);
        return [true,null]
    }
    return [false, 'Advance integration is only supported in US']
}

export const useDocereeSetDocereeAttributeTemperature = (temperature:string, unit:string, callbackFn?:()=>void) => {
    const win = globalThis?.window as any
    if (typeof win.setDocereeAttributeTemperature === 'function') {
        win.setDocereeAttributeTemperature(temperature, unit, callbackFn);
        return [true,null]
    }
    return [false, 'Advance integration is only supported in US']
}

export const useDocereeSetDocereeAttributeBP = (bp:string, unit:string, callbackFn?:()=>void) => {
    const win = globalThis?.window as any
    if (typeof win.setDocereeAttributeBP === 'function') {
        win.setDocereeAttributeBP(bp, unit, callbackFn);
        return [true,null]
    }
    return [false, 'Advance integration is only supported in US']
}

export const useDocereeSetDocereeAttributePulse = (pulse:string, unit:string, callbackFn?:()=>void) => {
    const win = globalThis?.window as any
    if (typeof win.setDocereeAttributePulse === 'function') {
        win.setDocereeAttributePulse(pulse, unit, callbackFn);
        return [true,null]
    }
    return [false, 'Advance integration is only supported in US']
}

export const useDocereeSetDocereeAttributeRespiration = (respiration:string, unit:string, callbackFn?:()=>void) => {
    const win = globalThis?.window as any
    if (typeof win.setDocereeAttributeRespiration === 'function') {
        win.setDocereeAttributeRespiration(respiration, unit, callbackFn);
        return [true,null]
    }
    return [false, 'Advance integration is only supported in US']
}





