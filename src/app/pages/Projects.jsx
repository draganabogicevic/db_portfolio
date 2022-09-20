
import Res from '../../res/Res'

import { Box, Grid, Text, Flex } from '@chakra-ui/react'
import ProjectItem from '../../components/ProjectItem'




const projects = [
    {
        image: Res.images.bitShow,
        title: 'Bit Show',
        technology: 'HTML/CSS/Chakra Ui/JavaScript/React',
        text: 'Simple SPA application made using HTML/CSS/Chakra Ui/JavaScript/React. Application is show case of using free REST API and displaying fetched data. There are features like panagination and bookmarking selected data with possibility to save it and display it even after closing page.',
        link: 'https://goofy-mclean-a8f6f7.netlify.app/',
    },
    {
        image: Res.images.gitHubSearcher,
        title: 'GitHub Searcher',
        technology: 'HTML/CSS/Bootstrap/JavaScript/React',
        text: 'Simple SPA application made using HTML/CSS/Bootstrap/JavaScript/React. This application was a task for job interview. It main task is to use free git hub api, to search users and repos and show results in custom Ui.',
        link: 'https://modest-raman-ec68e2.netlify.app/',
    },
    {
        image: Res.images.readerApp,
        title: 'ReaderApp',
        technology: 'HTML/CSS/Chakra Ui/JavaScript/React',
        text: 'Simple SPA application made using HTML/CSS/Chakra Ui/JavaScript/React. Application is show case of using free REST API and displaying fetched data. There are features like panagination and bookmarking selected data with possibility to save it and display it even after closing page.',
        link: '../../assets/gitHubSearcher.png',
    },
    {
        image: Res.images.intreviewReports,
        title: 'Interview Reports',
        technology: 'HTML/CSS/Bootstrap/JavaScript/React',
        text: 'This SPA application was made by using HTML/CSS/Bootstrap/JavaScript/React and it was the final exam at BIT boot camp. The purpose of app is interview tracking of candidates and reports with posibility to delete, change existing or edit new reports. The application has login page with autorization and different authorization levels. There is also wizard example for adding new reports.',
        link: 'https://63297dd8f476dc6ae7c5d79e--lighthearted-beignet-2c23eb.netlify.app/',
    },
]




const Projects = () => {
    
    // const handleMouseOver = () => {
    //     setIsActiv(true)
    // }


    return (
        <Box py={['50px', '50px', '50px', '150px']} px={['20px', '20px', '20px', '0']}>
            <Flex direction='column' alignItems='center' mb='100px'>
                <Text textStyle='subTitle'>PROJECTS</Text>
            </Flex>
            
            <Grid
                templateColumns='repeat(12, 1fr)'
                m='auto'
                maxWidth={['100%', '100%', '80%']} 

            >
                {projects.map(project => 
                    <ProjectItem project={project} />
                )}
            </Grid>
           
        </Box>
    )
}

export default Projects