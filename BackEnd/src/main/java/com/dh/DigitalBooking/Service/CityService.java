package com.dh.DigitalBooking.Service;

import com.dh.DigitalBooking.Exceptions.BadRequestException;
import com.dh.DigitalBooking.Model.City;
import com.dh.DigitalBooking.Repository.CityRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CityService {
    private static final Logger logger = Logger.getLogger(CategoryService.class);
    private CityRepository cityRepository;

    @Autowired
    public CityService(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    public City save(City city) {
        logger.debug("Guardando nueva ciudad: "+ city);
        return cityRepository.save(city);
    }

    public List<City> listAll() {
        logger.debug("Encontramos estas cuidades: ");
        return cityRepository.findAll();
    }

    public City findById(Integer id) throws BadRequestException {

        logger.debug("Buscando cuidad con: " +id);

        if (cityRepository.findById(id).isEmpty()) {
            logger.debug("No se encontro cuidad con id " + id);
            throw new BadRequestException("No se encontro cuidad con id " + id);
        } else {
            logger.debug("Se encontro ciudad con id: ");
            return cityRepository.findById(id).get();
        }

    }


}
