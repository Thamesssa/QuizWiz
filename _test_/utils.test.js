import { username,saveUserName } from "../utils";



describe('[saveUserName]', () => { 
    test('[saveUserName]should defined', () => { 
        expect(saveUserName).toBeDefined()
     })
     test('[saveUsername]should be a function', () => { 
        expect(typeof saveUserName).toBe('function')
      })
      test('[saveUserName] parameter should be a string', () => { 
      expect(()=>saveUserName(12)).toThrow("Enter valid name")
     })
     it("saveUserName] should be a not  be empty", ()=>{
            expect(()=>saveUserName("")).toThrow("Name is required")
         })
    
 })
 describe('[username]', () => { 
    it('[username] is defined', () => {
        expect(username).toBeDefined()
    });
  
    it('[username] should  a string', () => {
        saveUserName("Ndamu")
        expect(typeof username).toBe("string")
    });
      it('[username] should  a contain', () => {
        saveUserName("Ndamu")
        expect(username).toContain("Ndamu")
    });
    
    
 })