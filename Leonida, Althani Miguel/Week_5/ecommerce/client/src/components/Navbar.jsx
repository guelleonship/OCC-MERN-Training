import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
`

const Right = styled.div`
    flex: 1;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language> EN </Language>
                    <SearchContainer>

                    </SearchContainer>
                </Left>
                <Center>

                </Center>
                <Right>Right</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
