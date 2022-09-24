export const filter = (dummy, search, date, loc, price, prop, callback = {}) => {
    let filtered = [...dummy];
    if(search !== ''){
        filtered = filtered.filter(data => data.name === search);
        if(filtered.length > 0){
            callback([...filtered])
            return;
        }
        else
            filtered = [...dummy];
    }
    if(date !== ''){
        filtered = filtered.filter(data => data.movein.getTime() <= date.getTime());
    }
    if(loc !== ''){
        filtered = filtered.filter(data => data.location === loc);
    }
    if(prop !== ''){
        filtered = filtered.filter(data => data.type === prop);
    }
    if(price === '1'){
        filtered = filtered.filter(data => data.price >= 500 && data.price <= 2500)
    }else if(price === '2'){
        filtered = filtered.filter(data => data.price >= 2500 && data.price <= 5000)
    }else if(price === '3'){
        filtered = filtered.filter(data => data.price >= 5000)
    }
    callback([...filtered])
}