import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function PersonalProjectsCarousell() {
  return (
    <>
      <Text sx={{ fontSize: '2em', color: 'white', mt: 5 }}>
        Personal Projects
      </Text>
      <Box
        sx={{
          mt: 8,
          borderRadius: '8px',
          maxWidth: '700px',
          width: '100%',
        }}
      >
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 2,
                height: '35vh',
              }}
            >
              <img
                src="https://user-images.githubusercontent.com/94110588/177002658-10a19fe7-b264-4a0f-b2f3-2b9541b09813.gif"
                alt="video-foragr"
              />
            </Box>
            <Box sx={{ mt: 10, minWidth: '300px' }}>
              <Text sx={{ color: 'white', fontSize: '1em' }}>
                foRAg'r is a mobile app that helps user keep track of food items
                in their fridge. Features include parsing receipt, searching
                food by keywords and sending notifications when food is near
                expiry. The app is best viewed on iPhone or Android devices.
              </Text>
              <Text color="white" mt={2}>
                Github Link:{' '}
                <a href="https://github.com/cheenaeng/foRAgr">
                  https://github.com/cheenaeng/foRAgr
                </a>
              </Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                height: '35vh',
                backgroundColor: 'black',
              }}
            >
              <img
                src="https://user-images.githubusercontent.com/94110588/176999600-e1336e22-6ff9-42b0-bc1b-83ccdc9498aa.png"
                alt="img-kopiracoon"
              />
            </Box>
            <Box sx={{ mt: 10, minWidth: '300px' }}>
              <Text sx={{ color: 'white', fontSize: '1em' }}>
                KopiRAcoon is a coffee app that aims to help people order
                coffee(kopi) in their favorite proportion in Singapore.
              </Text>
              <Text color="white" mt={2}>
                Github Link:{' '}
                <a href="https://github.com/cheenaeng/KopiRAcoon-frontendr">
                  https://github.com/cheenaeng/KopiRAcoon-frontend
                </a>
              </Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                height: '35vh',
                backgroundColor: 'black',
              }}
            >
              <img
                src="https://user-images.githubusercontent.com/94110588/176837525-2a7d3c98-7ef3-4e83-919d-b8c517ed005e.png"
                alt="img-codenames"
              />
            </Box>
            <Box sx={{ mt: 10, minWidth: '300px' }}>
              <Text sx={{ color: 'white', fontSize: '1em' }}>
                A clone of the boardgame, Codenames developed to be played
                online with your friends. It is a multiplayer game which
                requires at least 4 players and players can be connected to the
                same room to share the same game.
              </Text>
              <Text color="white" mt={2}>
                Github Link:{' '}
                <a href="https://github.com/cheenaeng/Codename-Clone">
                  https://github.com/cheenaeng/Codename-Clone
                </a>
              </Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                height: '35vh',
                backgroundColor: 'black',
              }}
            >
              <img
                src="https://user-images.githubusercontent.com/94110588/176987772-eb75272a-a926-43b5-943a-205fac946417.png"
                alt="img-medication-app"
              />
            </Box>
            <Box sx={{ mt: 10, minWidth: '300px' }}>
              <Text sx={{ color: 'white', fontSize: '1em' }}>
                Jiayokliao is a medication reminder app that helps sets timely
                reminder to notify users to take their scheduled medications.
                This app is also linked to a database of medication details to
                provide useful information for users on certain medications they
                are taking.
              </Text>
              <Text color="white" mt={2}>
                Github Link:{' '}
                <a href="https://github.com/cheenaeng/JiaYokLiao">
                  https://github.com/cheenaeng/JiaYokLiao
                </a>
              </Text>
            </Box>
          </SwiperSlide>
          ...
        </Swiper>
      </Box>
    </>
  )
}

export default PersonalProjectsCarousell
