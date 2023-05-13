function once<T extends (...args: any[]) => any>(fn: T): 
 ((...args: Parameters<T>) => ReturnType<T> | undefined) {
  let firstCall:boolean = true;
    
    return function(...args) {
        if(firstCall) {
            var result = fn(...args)
            firstCall = false
            return result
        } else {
            return undefined
        }
    }
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */