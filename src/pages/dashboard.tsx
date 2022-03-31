import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react"
import dynamic from 'next/dynamic';
import Header from "../components/Header"
import SideBar from "../components/SideBar"

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zomm: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
  // xaxis: {
  //   type: 'category',
  //   axisBorder: {
  //     color: theme.colors.gray[600],
  //   },
  //   axisTicks: {
  //     color: theme.colors.gray[600],
  //   },
  //   categories: [
  //     '2022-03-17T00:00:00.000Z',
  //     '2022-03-18T00:00:00.000Z',
  //     '2022-03-19T00:00:00.000Z',
  //     '2022-03-20T00:00:00.000Z',
  //     '2022-03-21T00:00:00.000Z',
  //     '2022-03-22T00:00:00.000Z',
  //     '2022-03-23T00:00:00.000Z',
  //   ]
  // }
};

const series = [
  {name: 'series1', data: [31, 40, 28, 51, 42, 109, 100]},
];

function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignContent="flex-start">
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>
            <Chart options={options} series={series} type="area" height={160}/>
          </Box>

          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
            <Chart options={options} series={series} type="area" height={160}/>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export default Dashboard