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
        api.get('/funcionarios')
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
            const newDataNome = data.filter((item) => {
                const itemNome = item.nome ? item.nome.toUpperCase() : "".toLowerCase();
                const textData = text.toUpperCase();
                return itemNome.indexOf(textData) > -1 
            })
            const newDataCargo = data.filter((item) => {
                const itemcargo = item.cargo ? item.cargo.toUpperCase() : "".toLowerCase();
                const textData = text.toUpperCase();
                return itemcargo.indexOf(textData) > -1
            })
            const newDataTelefone = data.filter((item) => {
                const itemTelefone = item.telefone ? item.telefone.toUpperCase() : "".toLowerCase();
                const textData = text.toUpperCase();
                return itemTelefone.indexOf(textData) > -1
            })
            setFilterData(newDataNome);
            if(newDataNome.length === 0){
                setFilterData(newDataCargo)
            }if(newDataCargo.length === 0 && newDataNome.length === 0){
                setFilterData(newDataTelefone)
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
        const dia = numero.slice(0,2);
        const mes = numero.slice(2,4);
        const ano = numero.slice(4,8);
        return `${dia}/${mes}/${ano}`
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
                    value={search}
                    onChangeText={(text) => searchFilterFunction(text)}
                    
                />
                <Image style={styles.body__input__logo} source={lupa}/>
            </View>
            <View style={styles.body__list}>
            <View style={styles.body_tableheader}>
                <Text style={styles.body_tableheader__foto}>FOTO</Text>
                <Text style={styles.body_tableheader__nome}>NOME</Text>
                <View style={styles.body_tableheader__point}/>
            </View>
            <FlatList
                data={filterData}
                keyExtractor={({id}, index) => id}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                <View>
               
                    <TouchableOpacity style={styles.body__list__smallCard} 
                    onPress={() => openExpansion(item.id)}>
                        
                        <Image source={{uri: item.foto}} style={styles.body__list__foto}/>
                        <Text style={styles.body__list__nome}>{item.nome}</Text>
                       
                        <Image style={styles.body__list__arrow} source={expansion === item.id ? arrowUp : arrowDown}/>
                        
                    </TouchableOpacity>
                    {expansion === item.id? 
                        <View style={styles.body__list__extensionCard}>
                            <View style={styles.body__list__extensionCard__itens}>
                                <Text style={styles.body__list__extensionCard__item__left} >Cargo</Text>
                                <Text style={styles.body__list__extensionCard__item__right}>{item.cargo}</Text>
                            </View>
                            <View style={styles.body__list__extensionCard__itens}>
                                <Text style={styles.body__list__extensionCard__item__left}>Data de admissão</Text>
                                <Text>{formatarData(item.data_de_admissao)}</Text>
                            </View>
                            <View style={styles.body__list__extensionCard__itens}>
                                <Text style={styles.body__list__extensionCard__item__left}>Telefone</Text>
                                <Text style={styles.body__list__extensionCard__item__right}>{formatarTelefone(item.telefone)}</Text>
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