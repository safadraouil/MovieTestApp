import React from 'react'
import styled from 'styled-components'
import { Player } from 'video-react'
function Items(props) {
  const { items, removeHandler } = props
  const Box = styled.div({
    backgroundColor: '#F8F8FF',
    padding: '3px 50px 3px 50px',
  })
  const VideoBox = styled.div({
    marginLeft: '40%',
    marginTop: '3%',
    height: '40%',
    width: '25%',
  })
  const Lis = styled.li`
    list-style-type: none;
  `
  const Buttons = styled.button`
    margin: 1em;
    margin-left: 90%;
    width: 10%;
    border: 1px solid #2fa4e7;
    background: none;
  `
  return (
    <Box>
      <div>
        <ol>
          {items.map((data, index) => (
            <Lis key={index}>
              <VideoBox>
                <Player>
                  <source
                    src={
                      data.Url !== undefined
                        ? data.Url
                        : 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                    }
                  />
                </Player>
                <div className="list-group">
                  <a
                    href="_blank"
                    className="list-group-item list-group-item-action flex-column align-items-start active"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h3 className="mb-1">NAME: </h3>
                      <h5> {data.Name}</h5>
                    </div>
                  </a>
                  <a
                    href="_blank"
                    className="list-group-item list-group-item-action flex-column align-items-start"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1"> Description: </h5>
                    </div>
                    <p className="mb-1">{data.Description}</p>
                  </a>
                </div>
                <Buttons
                  onClick={() => removeHandler(index)}
                  className="btn btn-secondary"
                >
                  <span role="img" aria-label="remove">
                    ❌
                  </span>
                </Buttons>
              </VideoBox>
            </Lis>
          ))}
        </ol>
      </div>
    </Box>
  )
}
export default Items
