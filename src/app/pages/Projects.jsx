
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
        text: 'Simple SPA application made using HTML/CSS/Chakra Ui/JavaScript/React. Application is show case of using free REST API and displaying fetched data. There are features like panagination and bookmarking selected data with possibility to save it and display it even after closing page.',
        link: '../../assets/gitHubSearcher.png',
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
        text: 'Simple SPA application made using HTML/CSS/Chakra Ui/JavaScript/React. Application is show case of using free REST API and displaying fetched data. There are features like panagination and bookmarking selected data with possibility to save it and display it even after closing page.',
        link: '../../assets/gitHubSearcher.png',
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