import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, TextInput, ActivityIndicator } from "react-native";
import api from '../../services/api'

import styles from './styles';
import logo from '../../../assets/logo.png';
import lupa from '../../../assets/lupa.png';
import arrowDown from '../../../assets/arrowDown.png'
import arrowUp from '../../../assets/arrowUp.png'

export default function Home(){
    const [data, setdata] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [expansion, setExpansion] = useState(false);
    const [search, setSearch] = useState('');
    
    
    useEffect(() => {
        api.get('/employees')
        .then(res => {
            setdata(res.data)
            setFilterData(res.data)
        })
        .catch(error => 
            {console.log(error)})       
        }, []);

    const openExpansion = (id) => {
        if(id === expansion){
        setExpansion(false)
        } else {
            setExpansion(id)
        }
    };

    const searchFilterFunction = (text) => {
        if(text){
            const newDataName = data.filter((item) => {
                const itemNome = item.name ? item.name.toUpperCase() : "".toLowerCase();
                const textData = text.toUpperCase();
                return itemNome.indexOf(textData) > -1 
            })
            const newDataJob = data.filter((item) => {
                const itemJob = item.job ? item.job.toUpperCase() : "".toLowerCase();
                const textData = text.toUpperCase();
                return itemJob.indexOf(textData) > -1
            })
            const newDataPhone = data.filter((item) => {
                const itemPhone = item.phone ? item.phone.toUpperCase() : "".toLowerCase();
                const textData = text.toUpperCase();
                return itemPhone.indexOf(textData) > -1
            })
            setFilterData(newDataName);
            if(newDataName.length === 0){
                setFilterData(newDataJob)
            }if(newDataJob.length === 0 && newDataName.length === 0){
                setFilterData(newDataPhone)
            }
            setSearch(text)
        }else{
            setFilterData(data)
            setSearch(text)
        }
    }

    function formatarTelefone(numero){
        const parte1 = numero.slice(0,2);
        const parte2 = numero.slice(2,4);
        const parte3 = numero.slice(4,9);
        const parte4 = numero.slice(9,13);
        return `+${parte1} (${parte2}) ${parte3}-${parte4}`
    }
    function formatarData(numero){
        const data = new Date(numero)

        function formatarDay(day){
            if(day < 9){
                return `0${day}`
            }else{
                return day
            }
        }

        function formatarMonth(month){
            if(month < 9){
                return `0${month + 1}`
            }else{
                return month + 1
            }
        }

        return `${formatarDay(data.getDate())}/${formatarMonth(data.getMonth())}/${data.getFullYear()}`
    }
    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logo} style={styles.header__logo}/>
            </View>

            <View style={styles.body}>
                <Text style={styles.body__title}> Funcionários</Text>
            </View>
            <View style={styles.body__input__area}>
                <TextInput
                    style={styles.body__input__text}
                    placeholder="Pesquisa"
                    placeholderTextColor={'#9E9E9E'}
                    value={search}
                    onChangeText={(text) => searchFilterFunction(text)}
                    
                />
                <Image style={styles.body__input__logo} source={lupa}/>
            </View>
            <View style={styles.body__list}>
            <View style={styles.body_tableheader}>
                <Text style={styles.body_tableheader__photo}>FOTO</Text>
                <Text style={styles.body_tableheader__name}>NOME</Text>
                <View style={styles.body_tableheader__point}/>
            </View>
            <FlatList
                data={filterData}
                keyExtractor={({id}, index) => id}a
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                <View>
               
                    <TouchableOpacity style={styles.body__list__smallCard} 
                    onPress={() => openExpansion(item.id)}>  

                        <Image source={{uri: item.image}} style={styles.body__list__photo}/>
                        <Text style={styles.body__list__name}>{item.name}</Text>                     
                        <Image style={styles.body__list__arrow} source={expansion === item.id ? arrowUp : arrowDown}/>

                    </TouchableOpacity>

                    {
                        expansion === item.id? 
                        
                            <View style={styles.body__list__extensionCard}>
                                <View style={styles.body__list__extensionCard__itens}>
                                    <Text style={styles.body__list__extensionCard__item__left} >Cargo</Text>
                                    <Text style={styles.body__list__extensionCard__item__right}>{item.job}</Text>
                                </View>
                                <View style={styles.body__list__extensionCard__itens}>
                                    <Text style={styles.body__list__extensionCard__item__left}>Data de admissão</Text>
                                    <Text>{formatarData(item.admission_date)}</Text>
                                </View>
                                <View style={styles.body__list__extensionCard__itens}>
                                    <Text style={styles.body__list__extensionCard__item__left}>Telefone</Text>
                                    <Text style={styles.body__list__extensionCard__item__right}>{formatarTelefone(item.phone)}</Text>
                                </View>
                            </View>
                            :
                        null
                    }
                    
                </View>
               
                    )}  
                ListFooterComponent={<View style={{height: 300}}></View>}
            />
           
            </View>
        </View>
       
    )
}