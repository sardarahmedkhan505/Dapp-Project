const Token = artifacts.require('Token')

require('chai').use('chai-as-promised').should()

contract('Token', (accounts)=>{
    
    it('tracks the name', async ()=>{
        const tokken = await Token.new()
        const namme = await tokken.name()
        namme.should.equal('Sardar Ahmed Khan')

    })
})